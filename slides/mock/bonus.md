---

_Bonus Soru 30 / Bonus Question 30_ :
<br/>
__Technical Context View__

<br/>
<br/>

<Question
type="P"
question="The context view might contain a business context and a technical context, or both. Pick the two most appropriate answers that apply to the technical context."
:options="[
'The technical context contains the physical channels between your system and its environment',
'The technical context contains all the infrastructure on which the components of your system are deployed',
'The technical context should include hardware pricing or pricing of cloud services used as infrastructure for your architecture',
'The technical context contains information about the chosen programming language as well as all frameworks used to implement your software architecture',
'The technical context might contain different elements than the business context'
]"
:correctAnswers="[0, 4]"
:requiredSelections="2"
explanation="The technical context focuses on physical connections and can differ from the business context, but doesn't necessarily include implementation details or pricing information."
/>

---

_Bonus Soru 31 / Bonus Question 31_ :
<br/>
__Cross-cutting Concerns Documentation__

<br/>
<br/>

<Question
type="P"
question="Software architecture documentation could contain descriptions of cross-cutting concerns. Pick the TWO best reasons why documentation of cross-cutting concerns is useful."
:options="[
'Cross-cutting concepts should focus on the domain and be free of technical information',
'Aspects or concepts that are used in multiple parts of your software architecture should be described in a non-redundant way',
'Cross-cutting concepts can be reused in more products within the same organization',
'Cross-cutting concepts should be implemented by specialists. Therefore, separate documentation is useful'
]"
:correctAnswers="[1, 2]"
:requiredSelections="2"
explanation="Cross-cutting concerns documentation is valuable for maintaining consistency across the system and enabling reuse across different products."
/>

---

_Bonus Soru 32 / Bonus Question 32_ :
<br/>
__Interface Design Guidelines__

<br/>
<br/>

<Question
type="K"
question="What are guidelines for good interface design? Check which of the following statements are true and which are false."
:options="[
'Use of interfaces should be easy to learn',
'The client code should be reasonably easy to understand in relation to the functional complexity',
'An interface should provide access to a comprehensive set of implementation details',
'Interface specifications should contain functional and non-functional aspects',
'Local and remote calls to this interface should behave identically in all aspects'
]"
:correctAnswers="[0, 0, 1, 0, 1]"
explanation="Good interfaces should be learnable, understandable, and include both functional and non-functional specifications, while hiding implementation details and acknowledging differences between local and remote calls."
/>

---

_Bonus Soru 33 / Bonus Question 33_ :
<br/>
__Architectural Decisions__

<br/>
<br/>

<Question
type="K"
question="One definition says: 'Software architecture is the sum of all the decisions you have taken during development.' Check which statements about architectural/design decisions are true and which are false."
:options="[
'Architectural decisions can impact the structure of the building block or components',
'Software architects shall justify all design decisions in writing',
'Architectural decisions can have interdependencies between each other',
'Tradeoffs between conflicting quality requirements should be explicit decisions'
]"
:correctAnswers="[0, 1, 0, 0]"
explanation="Architectural decisions impact system structure, have interdependencies, and should include explicit tradeoffs, but not all decisions require written justification."
/>

---

_Bonus Soru 34 / Bonus Question 34_ :
<br/>
__Architecture Documentation Reasons__

<br/>
<br/>

<Question
type="K"
question="Which of the following statements are typical reasons for maintaining adequate architecture documentation and which are not typical reasons?"
:options="[
'To support onboarding of new developers',
'To support the automated testing approach of the system',
'To support the work of distributed teams',
'To assist in future enhancements of the product',
'To conform to regulatory or legal constraints',
'To ensure that developers have enough work to do'
]"
:correctAnswers="[0, 1, 0, 0, 0, 1]"
explanation="Documentation primarily supports knowledge sharing, maintenance, compliance, and future development, rather than automated testing or workload management."
/>

---

_Bonus Soru 35 / Bonus Question 35_ :
<br/>
__Quality Attribute Conflicts__

<br/>
<br/>

<Question
type="K"
question="Which of the following pairs of qualities are usually in conflict with each other, and which are not?"
:options="[
'Understandability – Readability',
'Usability – Security',
'Runtime configurability – Robustness',
'Security – Legal Compliance'
]"
:correctAnswers="[1, 0, 0, 1]"
explanation="Some quality attributes naturally conflict (like usability vs. security, configurability vs. robustness) while others are complementary or independent."
/>

