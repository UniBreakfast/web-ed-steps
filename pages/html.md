# [🙈](code-tokens.md) HTML

## What is HTML?

Hypertext Markup Language (HTML) is the main language used to create web pages. It uses tags to markup and give semantic structure to content.

Some of the main [HTML tags](html-tags.md) and corresponding [elements](html-elements.md) include:

- Text elements like headers (`<h1>` to `<h6>`), paragraphs (`<p>`), and lists (`<ol>`, `<ul>` and `<li>`).
- Image elements (`<img>`, `<picture>`) and elements for other media (`<audio>`, `<video>`).
- Forms (`<form>`) and interactive elements (`<a>`, `<button>`, `<input>`, `<select>`, `<textarea>`).
- Generic elements (`<div>`, `<span>`).
- ... and many more other [tags](html-tags.md).

## Structure of an HTML document

Tags are mostly paired and include opening and closing tags. The basic page structure code includes:

```html
<!DOCTYPE html> declaration to define this document as HTML
<html> 
  <head> tags with metadata, linked styles and scripts </head>
  <body> visible page content with multitude of nested tags and text </body>
</html>
```

There are several [code tokens in HTML](html-tokens.md): tags, text, attributes, and values. Tags are the most important tokens, as they define the structure of the document. Text is also important, as it is the content of the document. Attributes and values are used to specify behavior and provide additional information about the tags.

## How is HTML processed?

HTML files are usually saved with the `.html` or `.htm` extension. They are read by a program called [web browser](browser.md). [HTML tag](html-tags.md) is an instruction in [code](code.md) to create a corresponding [HTML element](html-element). The browser renders a tree of elements into a visual representation of the page.
