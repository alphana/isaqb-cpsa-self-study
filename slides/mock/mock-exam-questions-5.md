---

_Mock Exam Soru 24 / Mock Exam Question 24_ :
<br/>
__Dependency Inversion Principle__

<br/>
<br/>

<Question
type="A"
question="Which goals are you trying to achieve with the dependency inversion principle?"
:options="[
'Big building blocks shall not depend on small building blocks',
'Components shall be able to create dependent components more easily',
'Building blocks shall only depend on each other via abstractions'
]"
:correctAnswers="[2]"
explanation="The dependency inversion principle aims to reduce direct dependencies between components by introducing abstractions as intermediaries."
/>

---

_Mock Exam Soru 25 / Mock Exam Question 25_ :
<br/>
__Coupling Characteristics__

<br/>
<br/>

<Question
type="K"
question="What are characteristics of tight (high) or loose (low) coupling?"
:options="[
'Building blocks directly call dependent building blocks, i.e., without using indirect calls via interfaces or abstractions',
'Building blocks use shared complex data structures',
'Building blocks use a shared table (for read- and write operations) within a relational database',
'When designing building blocks, you have consistently applied the dependency inversion principle'
]"
:correctAnswers="[0, 0, 0, 1]"
explanation="Tight coupling involves direct dependencies and shared resources, while loose coupling employs abstractions and independence between components."
/>

---

_Mock Exam Soru 26 / Mock Exam Question 26_ :
<br/>
__DRY Principle__

<br/>
<br/>

<Question
type="P"
question="Which two statements about the principle 'Don't repeat yourself' (DRY) fit best? What could happen if parts of the source code or configuration exist in multiple copies in the system?"
:options="[
'DRY reduces security',
'Strict adherence to DRY could lead to higher coupling',
'The components of the system that contain redundant code can be improved independently of each other',
'Adherence to DRY leads to additional attack vectors in IT security',
'Applying the Layer patterns allows a consistent application of the DRY principle'
]"
:correctAnswers="[1, 2]"
:requiredSelections="2"
explanation="While DRY helps maintain consistency, it can lead to increased coupling between components. However, it allows for independent improvement of components when properly implemented."
/>

---

_Mock Exam Soru 27 / Mock Exam Question 27_ :
<br/>
__Communication Methods__

<br/>
<br/>

<Question
type="K"
question="You can communicate aspects of your software architecture verbally and/or in writing. How do these variants correlate?"
:options="[
'Verbal communication should supplement written documentation',
'Feedback to architecture decisions should always be done in writing to ensure traceability',
'Written documentation should always precede verbal communication',
'Architects should pick one variant (verbal or written) and stick to this choice during the whole development'
]"
:correctAnswers="[0, 1, 1, 1]"
explanation="Effective architectural communication combines both verbal and written methods flexibly, rather than strictly adhering to one approach."
/>

---

_Mock Exam Soru 28 / Mock Exam Question 28_ :
<br/>
__Architectural View Notations__

<br/>
<br/>

<Question
type="K"
question="Which of the following statements about notations for architectural views is true and which is false?"
:options="[
'Business Process Model & Notation (BPMN) should only be used by Business Analysts and not for architecture documentation',
'UML deployment models are the only way to document the mapping of software components to infrastructure',
'UML Package Diagrams can be used to capture the building-block view of software architectures',
'As long as the notation is explained (e.g. by a legend), any notation can be sufficient to describe building block structures and collaboration'
]"
:correctAnswers="[1, 1, 0, 0]"
explanation="Various notation systems can be valid for architectural documentation when properly explained, and UML is just one of many possible tools."
/>

---

_Mock Exam Soru 29 / Mock Exam Question 29_ :
<br/>
__Practical Architecture Views__

<br/>
<br/>

<Question
type="P"
question="Which architectural views have the most practical application for developing software architectures?"
:options="[
'Pattern View',
'Observer View',
'Building-Block View (Component View)',
'Deployment View'
]"
:correctAnswers="[2, 3]"
:requiredSelections="2"
explanation="Building-Block and Deployment views are the most practically useful as they capture essential structural and operational aspects of the system."
/>

