(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{129:function(e,t,o){"use strict";o.d(t,"a",function(){return s}),o.d(t,"b",function(){return c});var a=o(0),n=o.n(a),i=n.a.createContext({}),r=function(e){var t=n.a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):Object.assign({},t,e)),o},s=function(e){var t=r(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){return n.a.createElement(n.a.Fragment,{},e.children)}},h=function(e){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(o[a]=e[a]);return o}(e,["components","mdxType","originalType","parentName"]),l=r(t);return n.a.createElement(l[i+"."+o]||l[o]||u[o]||a,t?Object.assign({},s,{components:t}):s)};function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},52:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",function(){return r}),o.d(t,"rightToc",function(){return s}),o.d(t,"default",function(){return h});o(0);var a=o(129);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var r={id:"during-coding-interview",title:"During the Coding Interview"},s=[{value:"Before the interview (remote)",id:"before-the-interview-remote",children:[]},{value:"Self introduction",id:"self-introduction",children:[]},{value:"Upon receiving the question",id:"upon-receiving-the-question",children:[]},{value:"What to do when stuck",id:"what-to-do-when-stuck",children:[]},{value:"While coding",id:"while-coding",children:[]},{value:"After coding",id:"after-coding",children:[]}],l={rightToc:s},u="wrapper";function h(e){var t=e.components,o=i(e,["components"]);return Object(a.b)(u,n({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Congratulations, you are ready to put your skills into practice! In a real coding interview, you will be given a technical question by the interviewer, write code in a real-time collaborative editor (phone screen) or on a whiteboard (on-site) to solve the problem within 30–45 minutes. This is where the real fun begins!"),Object(a.b)("p",null,"Your interviewer will be looking out for signals that you fit the requirements of the role and it is up to you to display those signals to them. Initially it may feel weird to be talking while you are coding as most programmers do not have the habit of explaining out loud as they are typing code. However, it is hard for the interviewer to know what you are thinking just by looking at the code that you type. If you communicate your approach to the interviewer before you start coding, you can validate your approach with them and the both of you can agree upon an acceptable approach."),Object(a.b)("h2",null,Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"before-the-interview-remote"})),Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#before-the-interview-remote"}),"#"),"Before the interview (remote)"),Object(a.b)("p",null,"For phone screens/remote interviews, prepare paper and pen/pencil to jot down and visualize stuff. If you are given a question on trees and graphs, it usually helps if you draw out some examples of the data structure given in the question."),Object(a.b)("p",null,"Use earphones and make sure you are in a quiet environment. You definitely do not want to be holding a phone in one hand and only be able to type with the other. Try avoiding using speakers because if the echo is bad, communication is harder and repeating of words will just result in loss of valuable time."),Object(a.b)("h2",null,Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"self-introduction"})),Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#self-introduction"}),"#"),"Self introduction"),Object(a.b)("p",null,'Prepare a self introduction that follows the following outline (inspired by "Cracking the Coding Interview" by Gayle McDowell):'),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A sentence about your current or most recent role."),Object(a.b)("li",{parentName:"ol"},"A few sentences about your (academic) background. What did you focus on?"),Object(a.b)("li",{parentName:"ol"},"Some sentences about your professional experience after school/university. Where did you work? What projects did you deal with? What where typical challenges and tasks? Which technologies did you use?"),Object(a.b)("li",{parentName:"ol"},"Mention one to two sentences about what you do outside of work, if it is relevant for the role."),Object(a.b)("li",{parentName:"ol"},"Finish with a statement saying why you are seeking a new job opportunity and why you are interested in the role you applied for.")),Object(a.b)("p",null,"An example of the above could be:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"I'm John Doe and currently a Software Engineer at Google."),Object(a.b)("p",{parentName:"blockquote"},"My background is in Computer Science, where I received my bachelor's degree at MIT and my Master's degree at Stanford. I mainly did research on how to decrease complexity of search algorithms."),Object(a.b)("p",{parentName:"blockquote"},"After university, I started to work at Microsoft as a Software Engineer. It was a great experience as I was working in the Office team contributing to MS Word and MS Powerpoint. I learned a lot about C# and .NET back then. After about two years, I got an offer from Google where I have been working since then. I'm now leading the Search Optimization team and have gained a lot of knowledge in scalability and domain knowledge. My daily tasks consist of optimizing search queries and mentoring junior engineers."),Object(a.b)("p",{parentName:"blockquote"},"Outside of work I develop a on open source projects written in Python. Examples of some open source projects I created are ","<","insert examples",">","."),Object(a.b)("p",{parentName:"blockquote"},"I'm now seeking new job opportunities in the Boston area since I'm relocating for personal reasons. In particular I think Boston Dynamics is a perfect fit for my interests as well as my skill set.")),Object(a.b)("h2",null,Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"upon-receiving-the-question"})),Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#upon-receiving-the-question"}),"#"),"Upon receiving the question"),Object(a.b)("p",null,"Many candidates jump into coding the moment they hear the question. That is usually a big mistake. Take a moment to repeat the question back at the interviewer and make sure that you understand exactly what they are asking. Repeating back/rephrasing the question will reduce chances of miscommunication."),Object(a.b)("p",null,"Always seek clarification about the question upon hearing it even if it you think it is clear to you. You might discover something that you have missed out and it also sends a signal to the interviewer that you are a careful person who pays attention to details. Some interviewers deliberately omit important details to see if you ask the right questions."),Object(a.b)("p",null,"Some common questions you can ask:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How big is the size of the input?"),Object(a.b)("li",{parentName:"ul"},"How big is the range of values?"),Object(a.b)("li",{parentName:"ul"},"What kind of values are there? Are there negative numbers? Floating points? Will there be empty inputs?"),Object(a.b)("li",{parentName:"ul"},"Are there duplicates within the input?"),Object(a.b)("li",{parentName:"ul"},"What are some extreme cases of the input?"),Object(a.b)("li",{parentName:"ul"},"Can I destroy the original array/graph/data structure?"),Object(a.b)("li",{parentName:"ul"},"How is the input stored? If you are given a dictionary of words, is it a list of strings or a Trie?")),Object(a.b)("p",null,"After you have sufficiently clarified the scope and intention of the problem, explain your high level approach to the interviewer even if it is a naive solution. If you are stuck, consider various approaches and explain out loud why it will/will not work. Sometimes your interviewer might drop hints and lead you towards the right path."),Object(a.b)("p",null,'Start with a brute force approach, communicate it to the interviewer, explain the time and space complexity and why it is bad. It is unlikely that the brute force approach will be one that you will be coding. At this point, the interviewer will usually pop the dreaded "Can we do better?" question, meaning that they are looking for a more optimal approach. In my opinion, this is usually the hardest part of the interview. In general, look for repeated work and try to optimize them by potentially caching the calculated result somewhere and reference it later, rather than having to compute it all over again. There are some tips on tackling topic-specific questions that I dive into details below.'),Object(a.b)("p",null,"Only start coding after you and your interviewer have agreed on an approach and they have given you the green light."),Object(a.b)("h2",null,Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"what-to-do-when-stuck"})),Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#what-to-do-when-stuck"}),"#"),"What to do when stuck"),Object(a.b)("p",null,"Getting stuck during coding interviews is extremely common. But do not worry, that is part of the process and is a test of your problem solving abilities. Here are some tips to try out when you are stuck:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Talk through what you initially thought might work and explain why it doesn't",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This can help guide you on the right track by avoiding the pitfalls"))),Object(a.b)("li",{parentName:"ul"},"Come up with more test cases and write them down",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"A pattern may emerge"))),Object(a.b)("li",{parentName:"ul"},"Think about how you would solve it without a program",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"You may spot a pattern and come up with a general algorithm for it"))),Object(a.b)("li",{parentName:"ul"},"Recall past questions related to the topic, what similar questions in the past have you encountered and what techniques did you use?"),Object(a.b)("li",{parentName:"ul"},"Enumerate through the common data structures and whether they can be applied to the question",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Dictionaries/maps are extremely common in making algorithms more efficient"))),Object(a.b)("li",{parentName:"ul"},"Look out for repeated work and determine if you can cache those computations",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Trade off memory for speed")))),Object(a.b)("h2",null,Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"while-coding"})),Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#while-coding"}),"#"),"While coding"),Object(a.b)("p",null,"Write your code with good coding style. Reading code written by others is usually not an enjoyable task. Reading horribly-formatted code by others makes it worse. Your goal is to make your interviewer understand the code you have written so that they can quickly evaluate if your code does what you say it does and whether it solves the given problem. Use clear variable names, avoid single letter names unless they are for iteration. However, if you are coding on a whiteboard, you might not want to use extremely verbose variable names for the sake of reducing the amount you have to write. Abbreviations are usually fine if you explain what it means beforehand."),Object(a.b)("p",null,"Always be explaining what you are currently writing/typing to the interviewer. This is not about literally reading out what you are typing to the interviewer. Talk about the section of the code you are currently implementing at a higher level, explain why it is written as such and what it is trying to achieve."),Object(a.b)("p",null,"While coding, if you find yourself copying and pasting code, consider whether it is necessary. If you find yourself copying and pasting one large chunk of code spanning multiple lines, it is usually an indicator that you can refactor by extracting those lines into a function and defining parameters for the differences in them. If it is just a single line you copied, usually it is fine. Do remember to change the respective variables in your copied line of code where relevant. Copy-paste errors are a common source of bugs even in day-to-day coding!"),Object(a.b)("h2",null,Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"after-coding"})),Object(a.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#after-coding"}),"#"),"After coding"),Object(a.b)("p",null,"After you have finished coding, do not immediately announce to the interviewer that you are done. In most cases, your code is usually not perfect and contains some bugs or syntax errors. What you need to do now is to review your code."),Object(a.b)("p",null,"Firstly, look through your code from start to finish as if it is the first time you are seeing it, as if it was written by someone else and you are trying to spot bugs in it. That's exactly what your interviewer will be doing. Look through and fix any minor issues you may find."),Object(a.b)("p",null,"Next, come up with small test cases and step through the code (not your algorithm!) with those sample input. What interviewers usually do after you have finished coding would be to get you to write tests. It is a huge plus if you write tests for your code even before they prompt you to do so. You should be emulating a debugger when stepping through and jot down or say out the values of the important variables as you step through the lines of code."),Object(a.b)("p",null,"If there are huge duplicated chunks of code in your solution, it would be a good chance to refactor it and demonstrate to the interviewer that you are one who values code quality. Also look out for places where you can do ",Object(a.b)("a",n({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Short-circuit_evaluation"}),"short-circuit evaluation"),"."),Object(a.b)("p",null,"Lastly, give the time/space complexity of your code and explain why it is such. You can even annotate certain chunks of your code with the various time/space complexities to demonstrate your understanding of your code and the APIs of your chosen programming language. Explain any trade-offs in your current approach vs alternative approaches, possibly in terms of time/space."),Object(a.b)("p",null,"If your interviewer is happy with the solution, the interview usually ends here. It is also not uncommon that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk, and combine them later on."))}h.isMDXComponent=!0}}]);