const validateInput = (value) => {
    return(value.replace(/[^.\w[а-я]\s\.\,()&*?\+=!-]/gi, "").substring(0, 72))
}
const validateEmail = (value) => {
    return(value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
}
//email.replace(/^(.{2})[^@]+/, "$1XXX");


export { validateInput, validateEmail }

