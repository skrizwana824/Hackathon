var Expenses = /** @class */ (function () {
    function Expenses() {
        this.pexpense = [];
        this.amountinput = document.getElementById("amountin");
        this.categoryinput = document.getElementById("categ");
        this.dateinput = document.getElementById("date");
        this.tabledetails = document.getElementById("tf");
    }
    Expenses.prototype.addNewexpense = function (a, b, c) {
        var newTask = {
            id: (new Date()).getTime(),
            amount: a,
            category: b,
            date: c
        };
        this.pexpense.push(newTask);
        this.renderexpense();
        this.amountinput.value = '';
        this.categoryinput.value = '';
        this.dateinput.value = '';
    };
    Expenses.prototype.renderexpense = function () {
        var _this = this;
        this.tabledetails.innerHTML = '';
        this.pexpense.forEach(function (pexpense) {
            _this.tabledetails.innerHTML += "\n        <tr>\n                    ".concat(pexpense.amount, "\n                    ").concat(pexpense.category, "\n                    ").concat(pexpense.date, "\n                    <button >Done</button>\n                    <button>Delete</button>\n                </tr>\n        ");
        });
    };
    return Expenses;
}());
