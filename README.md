# Cloud-Based-Enterprise-Order-Validation-Integration-Testing-Framework

# Cloud-Based Order Lifecycle Testing Framework

## Overview
This project is an enterprise-style test automation framework designed to validate end-to-end workflows in a web-based order management system. It integrates UI and API testing using Playwright with TypeScript, along with CI/CD pipelines and containerized execution to simulate real-world cloud testing environments.

The framework demonstrates automation testing, integration validation, and workflow verification aligned with enterprise applications similar to Microsoft Dynamics 365.

---

## Features

- End-to-end order lifecycle validation
- UI and API integration testing using Playwright
- Automated test execution with TypeScript
- CI/CD pipeline integration using GitHub Actions
- Docker-based containerized test execution
- HTML and JUnit test reporting
- Failure debugging with traces, screenshots, and videos
- Version-controlled test repository management

---

## Tech Stack

- Playwright
- TypeScript
- Node.js (Express)
- GitHub Actions (CI/CD)
- Docker
- HTML, CSS, JavaScript

---

## Project Structure

order-testing-framework/

app/
  server.js
  public/
    index.html
    app.js
    styles.css

tests/
  order.spec.ts
  order.ui.spec.ts

playwright.config.ts
package.json
tsconfig.json
Dockerfile
.github/workflows/test.yml

---

## Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/order-testing-framework.git
cd order-testing-framework

Install dependencies:

npm install
npx playwright install

---

## Running the Application

Start the backend server:

npm start

Open in browser:

http://localhost:3000

---

## Running Tests

Execute all automated tests:

npm test

---

## Test Reports

Generate and view HTML reports:

npx playwright show-report

The report includes:
- Test execution summary
- Step-by-step logs
- Screenshots on failure
- Video recordings
- Trace viewer for debugging

JUnit reports are also generated for CI/CD integration.

---

## CI/CD Pipeline

The project uses GitHub Actions to automate:

- Dependency installation
- Application startup
- Playwright test execution
- Test report generation

The pipeline runs automatically on every push.

---

## Docker Usage

Build Docker image:

docker build -t order-testing-framework .

Run tests in container:

docker run order-testing-framework

---

## Testing Scenarios

- Order creation and lifecycle validation
- UI and API data consistency checks
- Negative testing with invalid inputs
- Workflow status transitions (Processing to Completed)
- Error handling and validation

---

## Key Concepts Demonstrated

- Automated testing using Playwright and TypeScript
- Integration testing between UI and backend APIs
- CI/CD-driven test execution workflows
- Cloud-based testing practices using Docker
- Test reporting and failure analysis
- Enterprise workflow validation

---
## Screenshots

![Application Running](https://github.com/VSUBASHRAJ/Cloud-Based-Enterprise-Order-Validation-Integration-Testing-Framework/blob/main/Exec%20Screenshots.png)

![Application Running](https://github.com/VSUBASHRAJ/Cloud-Based-Enterprise-Order-Validation-Integration-Testing-Framework/blob/main/Playwright%20SRT.png)


## Future Enhancements

- Deployment on AWS EC2
- Integration with Azure DevOps pipelines
- Advanced reporting dashboards
- Performance and load testing
- Database integration

---

## Author

Subashraj Vadivel
GitHub: https://github.com/VSUBASHRAJ

---

## License

This project is for educational and demonstration purposes.
