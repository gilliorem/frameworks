const D = document;
const B = D.body;

function createHtmlElement(element,parent, text="", _class=[])
{
    const newHtmlElement = D.createElement(element);
    parent.appendChild(newHtmlElement);
    newHtmlElement.innerText = text;
    newHtmlElement.className= _class;
    return newHtmlElement;
}

function createDiv(parent, text="", _class=[])
{
    const newDiv = createHtmlElement('div',parent,text, _class);
    return newDiv;
}

function createTitle(parent, text="", _class=[])
{
    const newTitle = createHtmlElement('h1',parent,text, _class);
    return newTitle;
}

function createImg(parent, source, alt, _class )
{
    const newImg = createHtmlElement('img', parent, "", _class);
    newImg.src=source;
    newImg.alt = alt;
    return newImg;
}

function createInputElement(parent, type, placeholder = '', _class = []) 
{
    const input = createHtmlElement('input', parent, "", _class);
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

function createButton(parent, text, _class=[])
{
    const button = createHtmlElement('button', parent, text, _class);
    return button;
}

function createLink(parent, text, href, _class=[])
{
    const link = createHtmlElement('a',parent,text, _class);
    link.href = href;
    return link;
}

function createOption(parent, text, optionText, _class)
{
    const option = createHtmlElement('option', parent, text, _class);
    option.value = optionText;
    return option;
}

function hideInterface(_interface)
{
    _interface.style.display="none";
}

function displayDynamicMenu(obj, left,transitionTime)
{
    obj.style.left = left;
    obj.style.transition = transitionTime+"s";
}