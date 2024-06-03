function limitInput(input, maxLen) {
    if (input.value.length > maxLen) {
        input.value = input.value.slice(0, maxLen);
    }
}