# Code Tokens

## What are code tokens?

There are several components that make up the code [syntax](syntax.md) of various web development languages such as [HTML](html.md), [CSS](css.md), and [JavaScript](javascript.md). And the fundamental component is the code token.

In the same way that words form the basic building blocks of natural languages, tokens of [code](code.md) are the basic building blocks of [programming languages](programming-languages.md). Just as words are categorized into parts of speech like nouns, verbs, and adjectives, code tokens are categorized into different types based on their function in the code.

Code tokens are small units of code that are recognized by the [computer](computer.md) as discrete elements with specific meanings. They are read by a program known as a [lexer](lexer.md), which takes a stream of code characters and breaks them into individual tokens.

## Processing code tokens

Tokens are formed by combining characters from the [code](code.md) in a specific way. For example, in [HTML](html.md), the < symbol followed by a letter is a token that represents an HTML tag. In [CSS](css.md), a token might be a color value such as #FF0000, while in [JavaScript](javascript.md), a token might be a variable name like "myVariable".

Once the tokens are recognized, they are passed onto a [parser](parser.md), which uses a set of rules to determine [how the tokens are grouped](token-grouping.md) and organized to form a valid expression or instruction (words like directive, statement, commant are also used in this context). The parser then generates an [abstract syntax tree (AST)](ast.md), which is a hierarchical structure that represents the logical structure of the code.
