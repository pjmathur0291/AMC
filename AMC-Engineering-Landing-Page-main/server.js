import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Initialize Gemini API
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Map conversation history to Gemini role format
    const contents = [];
    if (history && Array.isArray(history)) {
      // Skip the initial greeting from counselor to keep the context clean
      history.forEach((msg, idx) => {
        if (idx === 0 && msg.sender === 'counselor') return;
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      });
    }

    // Append current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const systemInstruction = `You are Prof. Swetha Acharya, the live Admissions Counselor at the Admissions Desk of AMC Engineering College, Bengaluru.
Your goal is to answer queries from prospective BTech and MTech students warmly, professionally, and enthusiastically, and guide them to register for their free live Career Counseling Session using the form on the landing page.

Keep your responses concise (2-4 sentences max), engaging, and professional. Use bullet points where appropriate.

Here is key information about AMC Engineering College to help you answer questions:
- Location: 18th K.M. Bannerghatta Road, Kalkere, Bengaluru, Karnataka 560083.
- Contact: Phone: +91 9902044114, Email: admissions@amceducation.in.
- Approvals: Approved by AICTE, Affiliated to VTU Bengaluru, accredited by NAAC and NBA.
- Placements: 95% placement rate. Highest package is ₹33 LPA. Median package is ₹5.5 LPA. Top recruiters include Infosys, Unisys, Flipkart, Indiabulls, and iGate.
- Programs Offered:
  * BTech Courses: Computer Science Engineering, Electronics & Communication, Mechanical Engineering, Civil Engineering, Electrical & Electronics, Aeronautical Engineering, Artificial Intelligence & Machine Learning, Data Science, and CSE + AI/ML.
  * MTech Courses: Advance Computer Science Engineering, VLSI & Embedded Systems, Data Science and Research Methodology, Digital Electronics, and Machine Design, AI & Machine Learning.
- Infrastructure & Campus: Situated on Bannerghatta Road in Bangalore. Modern computer sandboxes, IoT micro-testing suites, mechanical mills, and wind tunnels.
- Student Projects: Active student-led projects including Autonomous Warehouse Sorting Robots, EcoSmart IoT Home Grid Optimizers, AMC EduSphere Virtual Collaboration Hub, and BioHybrid Composite Stress Analyzers.

Encourage the student to book a counseling session by filling out the form on the page so that our counselors can guide them personally!`;

    // If API key is missing or uses default example, return a mock response to make it work gracefully on localhost
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      console.warn("GEMINI_API_KEY is not configured or uses default value. Returning simulated counselor response.");
      let responseText = "Thank you for reaching out! To provide you with personalized details about admissions, fees, and course structure, please fill out the BTech & MTech Counseling Intake Form on the page, and our registrars will contact you directly.";
      const lowerMsg = message.toLowerCase();
      if (lowerMsg.includes("package") || lowerMsg.includes("placement") || lowerMsg.includes("salary")) {
        responseText = "AMC has an excellent placement record: 95% placement rate, highest package of ₹33 LPA, and a median package of ₹5.5 LPA. Please fill out the form so we can send you our placement brochure!";
      } else if (lowerMsg.includes("course") || lowerMsg.includes("branch") || lowerMsg.includes("program") || lowerMsg.includes("degree")) {
        responseText = "We offer standard engineering courses such as CSE, ECE, AI/ML, Data Science, Aeronautical, Mechanical, Civil, and EEE. For detailed admission requirements and syllabus, please fill out the form!";
      }
      return res.json({ response: responseText });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const text = response.text || "Thank you for your question. Please feel free to register via the Career Counseling form on the page for detailed info.";
    res.json({ response: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: 'Failed to communicate with Gemini API' });
  }
});

// Serve static assets from dist folder in production
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
