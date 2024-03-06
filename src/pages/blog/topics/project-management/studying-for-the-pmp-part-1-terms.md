---
layout: '@/templates/BasePost.astro'
title: 'Studying for the PMP, Part 1 - Terms'
description: This blog post covers the reasoning for making a CHIP8 emulator and the steps I took to implement it (as fast as possible)!
pubDate:
imgSrc: '/images/posts/studying-for-the-pmp/part-1-banner.jpg'
imgAlt: 'A banner displaying the PMP logo'
tags: Project Management, PMP
series: Studying for the PMP
isProject: True
---

This is the first entry in the "Studying for the PMP" series. This section will cover both the basics of the PMP exam and the first *actual* section, an overview of basic terms.

I will be following [Andrew Ramadayal](https://www.linkedin.com/in/andrewramdayal/)'s TIA Education course & book. I would highly recommend you pick it up ([Amazon](https://www.amazon.com/PMP-Exam-Prep-Simplified-Learning/dp/B08SBFTXQT)). These notes are not a replacement for his course, where he will cover more than just content (mindset and tips). You also need to take his (or someone else's) 35 hour course to take the exam in the first place.

These are **all** my personal, handwritten notes, converted to text (via reMarkable), and cleaned  and reformatted up with ChatGPT (GPT does a great job fixing the formatting for me).

## Introduction

The PMP exam is an obvious choice for Project Managers looking to add more heft to their name, especially "younger" project managers. The Project Management Institute (PMI) is the administering body.

### Requirements

In order to take the exam, you must have the following credentials (for applicants without a 4-year degree, the requirements are different):

1. A 4-year Degree
2. 36 months of project manag*ing*
3. Complete a 35-hour PMP course OR attain the CAPM Certification

### Exam Outline

The exam is 180 questions long, lasts 4 hours, and can be taken at home or at a test site. The exam is broken into the following domains:

1. People (42%) - Best practices for people management
2. Process (50%) - Best practices for processes
3. Business Environment (8%) - Project context

The exam has the following question types:

1. Multiple Choice (majority)
2. Multiple Response
3. Matching
4. Hot spot (select an area on an image)
5. Fill-in-the-blank

### Maintaining the PMP

In order to maintain the PMP, you must complete 60 Professional Development Units (PDU's) in a 3-year period. These can be gained by:

1. Taking a class (1 PDU/hr)
2. Teaching a Class (1 PDU/**prep** hr)
3. Attending a Chapter meeting (1 PDU/hr)

If you fail to complete 60 PDU's in a 3-year span, your PMP certification will be taken away. You will have to take the exam all over again. Avoid this.

### PMP Application

Start thinking about what you want to include as a Project on your application! Remember: 36 months of management. Your role doesn't matter, just that you were in some way *managing a project*.

## Project Management Terms (An Overview)

### Project

- **Definition:** A temporary endeavor that produces a unique product, service, or result.
- Projects are **Temporary** (as opposed to "operations").
- Projects are **Unique**: the output of the project is unique.
- Projects are **Progressively Elaborated**: as time/project progresses, requirements become clearer.

### Project Management

- **Definition:** Application of knowledge, skills, tools, and techniques to satisfy project requirements.
- Parts include:
  1. Preparing a business case to justify the investment.
  2. Estimating resources and time.
  3. Developing and implementing a management plan for the project.
  4. Leading and motivating the project team.
  5. Managing risks, issues, and changes on the project.
  6. Monitoring progress against plan.
  7. Closing procedure (closing project in a controlled fashion).

### Value of a Project

- What value will this project bring to the company upon completion.
- Why should we undertake this project?
- *Possible project values:* Money, Brand Reputation, New or Changed Operations, Customer Service, or a New Product or Service.

### Operations Management

- Deals with "ongoing" production of goods and services.
- Consider the acquisitions, development, and utilization of resources that firms need to deliver the goods and services.
- Projects and operations are distinct - **projects are temporary**, operations are ongoing.

### Program Management

- **Definition:** Group of related projects managed in a coordinated manner to obtain benefits and control not available from managing them individually.
  - There must be some value add in managing them together.
- A project may or may not be part of a program, but a program will always have projects.
- It focuses on the project interdependencies and helps to determine the optimal approach for managing them.

### Portfolio Management

- **Definition:** A portfolio is a collection of **projects**, **programs**, **subsidiary portfolios**, and **operations** *managed as a group* to achieve strategic objectives.
- The hierarchy is as follows: Projects < Programs < Portfolios.

### Phases

- **Definition:** A phase is a collection of logically related project activities that culminates in the completion of one or more deliverables.
- The number of phases can depend on the Industry type, project size, and complexity of the project.

### Deliverables

- A deliverable is any unique and product, service, or result.
- May be tangible (a new car or a new piece of software) or intangible (a result, like a successful testing phase).
- Must be accepted by customer/ sponsor for the given phase.

### Project Life Cycle

- A representation of phases that a project typically goes through. Can be predictive or adaptive:
  1. Predictive - waterfall - needs are solid to begin with.
  2. Adaptive - agile - adapts to changing needs of the stakeholders.

### Project Governance

- **Definition:** Frameworks, functions, and processes that guide project management activities in order to create a unique product, service, or result.
- All companies have a different framework—it should be tailored to the businesses.
- It determines what processes you use to complete the project.

### Stakeholders

- **Definition:** Individuals, groups, or organizations that may affect, be affected by, or perceive to be affected by the project.
- Key stakeholders include:
  1. Project manager - manages the project.
  2. Customer - uses the deliverable.
  3. Project team - individuals completing the project work.
  4. Project sponsor - provides resources and support.
  5. Functional manager - departmental manager i.e. "Manager of Engineering", "Vice President of Marketing", "Director of IT", etc... (anyone who manages organizational resources)
- A stakeholder is **ANYONE** affected or perceived to be affected by the project.
- Customers are considered the most important stakeholder—a project could be on time and under budget, but customers decide if it actually was a success.

### Project Roles

- Project Manager (you are always the project manager):
  - Empowered to lead the project.
  - Authorized to make decisions.
  - Responsible for the success and failure of the project.
- Project Coordinator:
  - Less authority than a project manager.
  - *May* be authorized to make decisions.
- Project Expediter:
  - The least authority in the project management "world".
  - Very limited decision-making ability.

### Project Management Office (PMO)

- **Definition:** Organizational structure that standardizes the processes and facilitates the sharing of resources, methodologies, tools, and techniques.
- Types include:
  1. Supportive: Supports PM by providing templates, training, or lessons learned.
  2. Controlling: Defines company framework.
  3. Directive: Controls the whole project, and the PM reports directly to the PMO.

### Organizational Structure

- **Functional Organizations:** Structure that groups staff members according to their area of expertise.
  - Functional structures have functional teams that report to a functional manager (sales, engineering, etc...).
- **Matrix Organizations:** Structure can be broken down into three different matrix structure types—weak, balanced, and strong.
  - Structure type refers to PM authority in relation to functional manager authority (weak means functional manager has more authority than PM).
- **Project Oriented Organizations:** Structure where PM has the greatest amount of authority.
  - Team members are only ever part of a project, not functional groups.
  - When a project is over, team members move to new projects, not back to functional departments like they might in other structures.
- **Hybrid:** As the name suggests, it's a mix of the above.
- *In general*, the organization structure tells us who has more control over **resources**, the PM or the functional manager.

### Constraints

- The following are the important constraints defined by PMBOK6:
  1. Scope: do exactly *this*, no more & no less.
  2. Schedule: do it within *this* amount of time.
  3. Cost: don't spend more than *this* amount.
  4. Risk: watch out for *these* things.
  5. Quality: make sure *this* is high enough to make the customer is happy.
  6. Resources: make sure you have *this* (tools & people) in order to complete the project.

### Process Groups

- There are five process groups in project management, according to the PMBOK6:
  1. Initiating (2 processes)
  2. Planning (24 processes)
  3. Execution (10 processes)
  4. Monitor and Control (12 processes)
  5. Closing (1 process)
- In total, there are 49 processes across these 5 process groups.

### Knowledge Areas

- There are 10 knowledge areas in project management, according to the PMBOK6:
  1. Integration - Summary of all other areas (7 processes)
  2. Project Scope - Creating project objectives (6 processes)
  3. Project Schedule - Creating a timeline of objectives (6 processes)
  4. Project Cost - Creating a budget (4 processes)
  5. Project Quality - Gathering quality expectations and controlling quality (3 processes)
  6. Project Resources - Estimating available and needed resources (6 processes)
  7. Project Communications - How to properly communicate with stakeholders (3 processes)
  8. Risk Management - Identifying and controlling for possible and current risks (7 processes)
  9. Procurement Management - Managing vendors and ensuring they can & will deliver on promises (3 processes)
  10. Stakeholder Management - Managing your stakeholders (4 processes)

### Process Groups vs. Knowledge Areas Chart

- You should be able to draw this chart from memory:

<img src="/images/posts/studying-for-the-pmp-part-1-terms/project-management-process-groups.jpg">

### Process

- **Definition:** A process combines inputs, tools, and techniques to execute on a purpose for the project and produce an output.
- Can be broken down into three parts:
  - **Input**: Starting point for process or the "raw materials". The input for one process can be the output of a previous process.
  - **Tools and Techniques**: The actions or methods that are used to transform the raw materials into output.
  - **Output**: The result of our efforts.
