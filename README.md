# SAP Integration Content Automation

### 📘 [**Click Here to Open the Full User Guide**](https://vishal1889.github.io/postmancollection-IntegrationContentAutomation/)

---

A comprehensive Postman Collection designed to automate mass operations and maintenance tasks for **SAP Integration Suite (Cloud Integration)**. This tool significantly reduces manual effort during critical phases like cutovers, migrations, or bulk updates.

## 🚀 Key Features

* **Mass Configuration Update:** Update specific configuration parameters (e.g., receiver URLs, credential names) across hundreds of iFlows using a simple CSV input.
* **Mass Deployment:** Deploy multiple iFlows, Script Collections, or Value Mappings in bulk.
* **Mass Undeployment:** Quickly remove artifacts from the runtime.
* **Content Backup:** Download integration artifacts (iFlows) as `.zip` files for version control or backup purposes.
* **Reporting:** Generates CSV reports for configuration parameters and operation statuses.

## 📂 Repository Contents

* **`Integration Content - Automation.postman_collection.json`**
    The core Postman Collection containing all the automation workflows and scripts.
* **`saveFilesServer.js`**
    A lightweight Node.js server script required to save downloaded files (backups) and generated CSV reports directly to your local machine.
* **`index.html`**
    The complete, step-by-step **User Guide**. The link at the top of this file opens this guide as a webpage.

## 📖 Quick Start

1.  **Open the Guide:** Click the link at the top of this README to view the full instructions.
2.  **Download Files:** Clone this repository or download the ZIP to get the Collection and Server script.
3.  **Setup:** Follow the "Prerequisites" section in the HTML guide to configure Postman and the local Node.js server.

## ⚠️ Disclaimer
This tool is provided "as-is". While it has been tested in project environments, please ensure you test it in a non-production environment (Development/Test) before executing mass updates or deployments in Production. Always verify your CSV input files carefully.
