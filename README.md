# code-modifier-tool
# Code Modifier Assistant

This is an AI-powered full-stack web application that allows users to modify their code based on custom prompts. The tool uses a FastAPI backend and a React frontend.

---

## 🚀 Features

### ✅ Code Modification via AI
- **Input**: Paste your Python code and type a prompt (e.g., "Replace all print statements with logging.info").
- **Output**: Modified code and explanation.

### 🧠 Prompt Input
- Enter a natural language instruction to specify the type of modification.
- Example: "Add type hints to functions."

### 🗃️ Code Viewer
- Displays the modified code in a **dark-themed syntax-highlighted** block.
- Includes a **Copy Code** button.

### 🔁 Integrate Button
- Replaces the original input with the modified version for further edits.

### 🧹 Clear Button
- Resets the input fields and clears the results.

### ⚠️ Empty Prompt & Code Check
- Alerts if either code or prompt is missing before submission.

---

## 🧪 Test Cases

### ✅ Test Case 1: Modify print to logging
**Prompt**: `Replace print statements with logging.info`
**Input Code**:
```python
print("Hello")
```
**Expected Output**:
```python
import logging
logging.info("Hello")
```

### ✅ Test Case 2: Add type hints
**Prompt**: `Add type hints to functions`
**Input Code**:
```python
def add(a, b):
    return a + b
```
**Expected Output**:
```python
def add(a: int, b: int) -> int:
    return a + b
```

### ✅ Test Case 3: Handle empty input
**Prompt**: (Leave blank)
**Input Code**: (Leave blank)
**Expected Behavior**: Alert: *"Please enter both code and a prompt."*

---

## 🛠️ Project Structure
```
code-iterator-assistant/
├── backend/
│   ├── main.py        # FastAPI server
│   └── venv/          # Virtual environment
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── App.js     # React UI
│   └── package.json   # React dependencies
```

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/code-modifier.git
cd code-modifier
```

### 2. Start Backend
```bash
cd backend
# Activate virtual environment
source venv/Scripts/activate  # For Git Bash
# OR
.\venv\Scripts\activate      # For PowerShell

# Run the server
uvicorn main:app --reload
```
Backend will run at `http://localhost:8000`

### 3. Start Frontend
```bash
cd frontend
npm install
npm start
```
Frontend will run at `http://localhost:3000`

---


