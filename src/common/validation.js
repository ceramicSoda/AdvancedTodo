const validateInput = (value) => {
    return(value.replace(/[^.\w\s\.\,()&*?+=!-]/gi, "").substring(0, 72))
}
const validateEmail = (value) => {

}

export { validateInput, validateEmail }

