export default function useFormatter() {
    function removeTrailingZeros(profit) {
        const value = parseFloat(profit || "0").toString();
        return value.includes(".") ? value : value + ".";
    }

    function getSuffix(profit) {
        let decimalPart = (profit ? profit.toString().split(".")[1] : []) || [];
        let suffix = "";
        for (let i = decimalPart.length - 1; i >= 0; i--) {
            if (decimalPart[i] === "0") {
                suffix = decimalPart[i] + suffix;
            } else {
                break;
            }
        }
        return suffix;
    }
    return { removeTrailingZeros, getSuffix }
}