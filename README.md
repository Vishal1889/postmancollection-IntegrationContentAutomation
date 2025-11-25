# SAP Integration Content Automation

A comprehensive Postman Collection designed to automate mass operations and maintenance tasks for **SAP Integration Suite (Cloud Integration)**. This tool significantly reduces manual effort during critical phases like cutovers, migrations, or bulk updates.

## 🚀 Key Features

* **Mass Configuration Update:** Update specific configuration parameters (e.g., receiver URLs, credential names) across hundreds of iFlows using a simple CSV input.
* **Mass Deployment:** Deploy multiple iFlows, Script Collections, or Value Mappings in bulk.
* **Mass Undeployment:** Quickly remove artifacts from the runtime.
* **Content Backup:** Download integration artifacts (iFlows) as `.zip` files for backup purposes.
* **Reporting:** Generates CSV reports for configuration parameters and operation statuses.

## 📂 Repository Contents

* **`Integration Content - Automation.postman_collection.json`**
    The core Postman Collection containing all the automation workflows and scripts.
* **`saveFilesServer.js`**
    A lightweight Node.js server script required to save downloaded files (backups) and generated CSV reports directly to your local machine.
* **`index.html`**
    The complete, step-by-step **User Guide**. Open this file in your browser to see detailed instructions on setup, prerequisites, and how to run each workflow.

## 📖 How to Use

### 1. Documentation
For a detailed walkthrough, prerequisites, and configuration steps, please refer to the https://vishal1889.github.io/postmancollection-IntegrationContentAutomation/

### 2. Prerequisites
* **Postman:** Installed on your local machine/Web Version
* **Node.js:** Installed to run the local file-saving server.
* **SAP BTP Service Key:** You will need a service key for the Process Integration Runtime (Plan: `api`) with appropriate permissions (see the User Guide for roles).

### 3. Quick Start
1.  **Download** the files from this repository.
2.  **Import** the `.json` collection into Postman.
3.  **Setup** the local server:
    ```bash
    npm init -y
    npm install express
    node saveFilesServer.js
    ```
4.  **Configure** your Collection Variables in Postman (Client ID, Secret, Token URL).
5.  **Run** the desired folder using the Postman Collection Runner.

## ⚠️ Disclaimer
This tool is provided "as-is". While it has been tested in project environments, please ensure you test it in a non-production environment (Development/Test) before executing mass updates or deployments in Production. Always verify your CSV input files carefully.
