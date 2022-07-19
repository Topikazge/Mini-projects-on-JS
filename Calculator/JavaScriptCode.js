//Класс в котором всё создается
// Для поиска объектов и создание делегатов отдельный метот для OnLoad


function main() {
    const _model = new Model();
    const _modelView = new ModelView(_model);
    _model.INT(_modelView);


    const listValue = document.getElementsByClassName("value");
    console.log(listValue);
    for (let i = 0; i < listValue.length; i++) {
        listValue[i].addEventListener('click', function () {
            console.log(listValue[i]);
            _modelView.AddNumber(listValue[i].innerText);
        })
    }

    const listOperation = document.getElementsByClassName("operation");
    console.log(listOperation);
    for (let i = 0; i < listOperation.length; i++) {
        listOperation[i].addEventListener('click', function () {
            console.log(listOperation[i]);
            _modelView.AddOperation(listOperation[i].innerText);
        })
    }

    const answerButton = document.getElementById("Answer");
    answerButton.addEventListener('click', function () { _modelView.Decide() });

    _modelView.Decide
}



class ModelView {
    #_model;
    #_view;
    constructor(model) {
        this.#_model = model;
    }

    SetView(value) {
        this.#_view = value;
    }

    AddNumber(value) {
        this.#_model.AddNimber(value);
    }

    AddOperation(value) {
        this.#_model.AddOperation(value);
    }

    Decide() {
        this.#_model.Decide();
    }

    View(value) {
        _view.innerText = value;
    }

}

class Model {
    #_expression;
    #_calculator;
    #_viewerEnterDate;
    INT(viewModel) {
        this.#_expression = new Expression();
        this.#_calculator = new Calculator();
        this.#_viewerEnterDate = new ViewerEnterDate(viewModel.View);
        // this.#_expression.ChangeExpression(this.#_expression, this.#_viewerEnterDate.View);
        this.#_expression.addEventListener('ClearExpression', function () { console.log('hfghf'); this.#_viewerEnterDate.View; });
        this.#_expression.addEventListener('AddOperation', function () { console.log('hfghf'); this.#_viewerEnterDate.View; });
        this.#_expression.addEventListener('Delete', function () { console.log('hfghf'); this.#_viewerEnterDate.View; });
        this.#_expression.addEventListener('AddAnswer', function () { console.log('hfghf'); this.#_viewerEnterDate.View; });


    }

    AddNimber(value) {
        this.#_expression.AddNumber(value);
        console.log(this.#_expression.GetElementsExpression);
    }

    AddOperation(value) {
        this.#_expression.AddOperation(value);
        console.log(this.#_expression.GetElementsExpression);
    }

    Decide() {
        this.#_expression.AddAnswer(this.#_calculator.Calculate(this.#_expression.GetElementsExpression));
        console.log(this.#_expression.GetElementsExpression);
        //console.log(#_calculator.Calculate(this.#_expression.GetElementsExpression));
    }

}

class Expression {
    #_elements;

    constructor() {
        this.#_elements = new ElementsExpression()
    }


    get FirstValue() {
        return this.#_elements.FirstValue;
    }

    get SecondValue() {
        return this.#_elements.SecondValue;
    }

    get MathOperation() {
        return this.#_elements.MathOperation;
    }

    get GetElementsExpression() {
        return Object.assign(this.#_elements);
        // return this.#_firstValue + ' ' + this.#_mathOperation + ' ' + this.#_secondValue + ' = ' + this.#_answer
    }

    get IsComplete() {
        return (this.#_elements.FirstValue != undefined) && (this.#_elements.SecondValue != undefined) && (this.#_elements.MathOperation != undefined) ? true : false;
    }


    ClearExpression() {
        for (elem in this.#_elements) {
            elem = undefined;
        }
    }

    AddNumber(value) {
        if (this.#_elements.FirstValue == undefined) {
            this.#_elements.FirstValue = value;
        }
        else if (this.#_elements.FirstValue != undefined && this.#_elements.FirstValue == undefined) {
            this.#_elements.FirstValue += value;
        }
        else if (this.#_elements.SecondValue == undefined) {
            this.#_elements.SecondValue = value;
        }
        else if (this.#_elements.SecondValue != undefined) {
            this.#_elements.SecondValue += value;
        }
    }

    AddOperation(operation) {
        if (this.#_elements.FirstValue != undefined && this.#_elements.SecondValue == undefined) {
            this.#_elements.MathOperation = operation;
        }
    }

    AddAnswer(value) {
        this.#_elements.Answer = value;
    }


    Delete() {
        if (this.#_elements.secondValue != undefined) {
            this.#_elements.secondValue = undefined;
        }
        else if (this.#_elements.MathOperation != undefined) {
            this.#_elements.MathOperation = undefined;
        }
        else if (this.#_elements.FirstValue != undefined) {
            this.#_elements.FirstValue = undefined;
        }
    }

    ChangeExpression(h, _method) {
        let Vvv = function () { _method(this.#_elements); }
        /*   this.addEventListener('ClearExpression', function () { console.log('hfghf'); _method(this.#_elements); });
           this.addEventListener('AddOperation', function () { console.log('hfghf'); _method(this.#_elements); });
           this.addEventListener('Delete', function () { console.log('hfghf'); _method(this.#_elements); });
           this.addEventListener('AddAnswer', function () { console.log('hfghf'); _method(this.#_elements); });*/
    }
}
/*class Expression {
    #_firstValue;
    #_secondValue
    #_mathOperation;
    #_answer;

    #_elements;

    constructor() {
        this.#_elements = new ElementsExpression()
    }


    get FirstValue() {
        return this.#_firstValue;
    }

    get SecondValue() {
        return this.#_secondValue;
    }

    get MathOperation() {
        return this.#_mathOperation;
    }

    get GetElementsExpression() {

        // return this.#_firstValue + ' ' + this.#_mathOperation + ' ' + this.#_secondValue + ' = ' + this.#_answer
    }

    get IsComplete() {
        return (this.#_firstValue != undefined) && (this.#_secondValue != undefined) && (this.#_mathOperation != undefined) ? true : false;
    }


    ClearExpression() {
        _firstValue = _secondValue = _mathOperation = _answer = undefined;
    }

    AddNumber(value) {
        if (this.#_firstValue == undefined) {
            this.#_firstValue = value;
        }
        else if (this.#_firstValue != undefined && this.#_mathOperation == undefined) {
            this.#_firstValue += value;
        }
        else if (this.#_secondValue == undefined) {
            this.#_secondValue = value;
        }
        else if (this.#_secondValue != undefined) {
            this.#_secondValue += value;
        }
    }

    AddOperation(operation) {
        if (this.#_firstValue != undefined && this.#_secondValue == undefined) {
            this.#_mathOperation = operation;
        }
    }

    AddAnswer(value) {
        this._answer = value;
    }


    Delete() {
        if (this.#_secondValue != undefined) {
            this.#_secondValue = undefined;
        }
        else if (this.#_mathOperation != undefined) {
            this.#_mathOperation = undefined;
        }
        else if (this.#_firstValue != undefined) {
            this.#_firstValue = undefined;
        }
    }
}*/

class Calculator {
    Calculate(elemnts) {
        let result = 0;
        switch (elemnts.MathOperation) {
            case '+':
                result = this.#Addition(elemnts.FirstValue, elemnts.SecondValue);
                break;
            case '-':
                result = this.#Subtraction(elemnts.FirstValue, elemnts.SecondValue);
                break;
            case '*':
                result = this.#Multiplication(elemnts.FirstValue, elemnts.SecondValue);
                break;
            case '/':
                result = this.#Division(elemnts.FirstValue, elemnts.SecondValue);
                break;
        }
        return result;
    }

    #Addition(firstValue, secondValue) {
        return Number(firstValue) + Number(secondValue);
    }

    #Subtraction(firstValue, secondValue) {
        return Number(firstValue) - Number(secondValue);
    }

    #Multiplication(firstValue, secondValue) {
        return Number(firstValue) * Number(secondValue);
    }

    #Division(firstValue, secondValue) {
        return Number(firstValue) / Number(secondValue);
    }
}

class ViewerEnterDate {
    #_expression;
    #_event;
    constructor(textElement) {
        this.#_event = textElement;
    }

    View(elements) {
        text = '';
        if (elements.FirstValue != undefined) {
            text += elements.FirstValue;
        }
        if (elements.MathOperation != undefined) {
            text += ' ' + elements.SecondValue;
        }
        if (elements.SecondValue != undefined) {
            text += ' ' + elements.SecondValue;
        }
        if (elements.AddAnswer != undefined) {
            text += ' ' + ' = ' + elements.SecondValue;
        }
        _event(elements);
    }


}

class ElementsExpression {
    #_firstValue;
    #_secondValue
    #_mathOperation;
    #_answer;

    set FirstValue(value) {
        this.#_firstValue = value;
    }

    get FirstValue() {
        return this.#_firstValue;
    }

    set SecondValue(value) {
        this.#_secondValue = value;
    }

    get SecondValue() {
        return this.#_secondValue;
    }


    set MathOperation(value) {
        this.#_mathOperation = value;
    }

    get MathOperation() {
        return this.#_mathOperation;
    }


    set Answer(value) {
        this.#_answer = value;
    }

    get Answer() {
        return this.#_answer;
    }

}


window.onload = function () {
    main();
};


//main();
