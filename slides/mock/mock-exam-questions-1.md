
# ISAQB CPSA Mock Exam Questions

---

_Mock Exam Soru 1 / Mock Exam Question 1_ :
<br/>
__Software Architecture Definitions__

<br/>
<br/>

<Question
type="A"
question="How many definitions of 'software architecture' exist?"
:options="[
'Exactly one for all kinds of systems',
'One for every kind of software system (e.g. embedded, real-time, decision support, web, batch, ...)',
'A dozen or more different definitions'
]"
:correctAnswers="[2]"
explanation="Software architecture has evolved over time, leading to multiple valid definitions for different contexts and perspectives."
/>

---

_Mock Exam Soru 2 / Mock Exam Question 2_ :
<br/>
__Software Architecture Aspects__

<br/>
<br/>

<Question
type="P"
question="Which THREE of the following aspects are covered by the term 'software architecture'?"
:options="[
'Components',
'Cross cutting concepts',
'(internal and external) Interfaces',
'Database schema',
'Hardware sizing'
]"
:correctAnswers="[0, 1, 2]"
:requiredSelections="3"
explanation="Software architecture primarily encompasses structural components, cross-cutting concepts, and interfaces rather than specific implementation details like database schemas or hardware specifications."
/>

---

_Mock Exam Soru 3 / Mock Exam Question 3_ :
<br/>
__Cross-cutting Concepts__

<br/>
<br/>

<Question
type="P"
question="Which FOUR of the following statements about (crosscutting) concepts are most appropriate?"
:options="[
'Uniform usage of concepts reduces coupling between building blocks',
'The definition of appropriate concepts ensures the pattern compliance of the architecture',
'Uniform exception handling can be achieved when architects agree with developers upon a suitable concept prior to implementation',
'For each quality goal there should be an explicitly documented concept',
'Concepts are a means to increase consistency',
'A concept can define constraints for the implementation of many building blocks',
'A concept might be implemented by a single building block'
]"
:correctAnswers="[2, 4, 5, 6]"
:requiredSelections="4"
explanation="Cross-cutting concepts help achieve consistency, define implementation constraints, and can be implemented either centrally or distributed across the system."
/>

---

_Mock Exam Soru 4 / Mock Exam Question 4_ :
<br/>
__Architecture Documentation__

<br/>
<br/>

<Question
type="K"
question="Three architects and seven developers are working on the documentation of the software architecture. Which methods are appropriate to achieve consistent and adequate documentation?"
:options="[
'The lead architect coordinates the creation of the documentation',
'Identical templates are used for the documentation',
'All parts of the documentation are automatically extracted from the source code'
]"
:correctAnswers="[0, 0, 1]"
explanation="While coordination and templates are valuable for consistency, not all documentation can be automatically extracted from code as some aspects like reasoning and alternatives need manual documentation."
/>

---

_Mock Exam Soru 5 / Mock Exam Question 5_ :
<br/>
__Runtime Behavior Documentation__

<br/>
<br/>

<Question
type="P"
question="Which FOUR of the following techniques are best suited to illustrate the workflow or behavior of the system at runtime?"
:options="[
'Flowcharts',
'Activity Diagrams',
'Depiction of screen flows (sequence of user interactions)',
'Sequence diagram',
'Linear Venn diagram',
'Numbered list of sequential steps',
'Tabular description of interfaces',
'Class diagrams'
]"
:correctAnswers="[0, 1, 3, 5]"
:requiredSelections="4"
explanation="Dynamic behavior is best illustrated using diagrams and notations that can show sequence, flow, and interaction over time."
/>

