function iframe() {
    editor.document.designMode = "on"
}

function bold() {
    editor.document.execCommand('bold', false, null);
}

function italic() {
    editor.document.execCommand('italic', false, null);
}

function list() {
    editor.document.execCommand('insertunorderedlist', false, '');
}

function underline() {
    editor.document.execCommand('underline', false, null);
}

function fontSize() {
    let size = prompt("Enter a size (1-7)", "")
    editor.document.execCommand('fontsize', false, size);
}

function fontColor() {
    let color = prompt("Enter a color code or name of color)", "")
    editor.document.execCommand('forecolor', false, color);
}

function highlight() {
    let color = prompt("Enter a color code or name of color)", "")
    editor.document.execCommand('hilitecolor', false, color);
}

function align() {
    editor.document.execCommand('bold', false, null);
}

function link() {
    let link = prompt("Enter a link", "https://")
    editor.document.execCommand('createlink', false, link);
}

function unlink() {
    editor.document.execCommand('unlink', false, null);
}

function formSubmit() {
    document.getElementById("textarea").value = window.frames['editor'].document.body.innerHTML;
    document.getElementById("rtf").submit();
}