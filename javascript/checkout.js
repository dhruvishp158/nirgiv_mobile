let FormInputs = {
    
    cardNo: document.querySelector("input[name='cardnumber']"),
    cvv: document.querySelector("input[name='cvv']"),
    date: document.querySelector("input[name='expmonth']"),
    province: document.querySelector("input[name='city']"),
    email: document.querySelector("input[name='email']"),


};


FormInputs.cardNo.onkeyup = () => {
    if (FormInputs.cardNo.value != '') {
        if (/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/.test(FormInputs.cardNo.value)) {
            FormInputs.cardNo.style.border = '2px solid #00E676';
        } else {
            FormInputs.cardNo.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.cardNo.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.cvv.onkeyup = () => {
    if (FormInputs.cvv.value != '') {
        if (/[0-9]{3}/.test(FormInputs.cvv.value)) {
            FormInputs.cvv.style.border = '2px solid #00E676';
        } else {
            FormInputs.cvv.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.cvv.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}


let date = new Date();
date = date.getFullYear();

FormInputs.date.min = `${date}-01`;
FormInputs.date.max = `${date + 20}-01`;

FormInputs.date.onkeyup = () => {
    if (FormInputs.date.value != '') {
        if (/\d{4}-\d{2}$/.test(FormInputs.date.value)) {
            FormInputs.date.style.border = '2px solid #00E676';
        } else {
            FormInputs.date.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.date.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.province.onkeyup = () => {
    if (FormInputs.province.value != '') {
        if (/[A-Z][a-z]/.test(FormInputs.province.value)) {
            FormInputs.province.style.border = '2px solid #00E676';
        } else {
            FormInputs.province.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.province.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}


FormInputs.email.onkeyup = () => {
    if (FormInputs.email.value != '') {
        if (/\w(\w|[!#$%&'\+\/=?^_`{|}~])([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+/.test(FormInputs.email.value)) {
            FormInputs.email.style.border = '2px solid #00E676';
        } else {
            FormInputs.email.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.email.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}















// FormInputs.firstName.onkeyup = () => {
//     if (FormInputs.firstName.value != '') {
//         if (checkNumber(FormInputs.firstName.value)) {
//             FormInputs.firstName.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.firstName.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.firstName.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.lastName.onkeyup = () => {
//     if (FormInputs.lastName.value != '') {
//         if (checkNumber(FormInputs.lastName.value)) {
//             FormInputs.lastName.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.lastName.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.lastName.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.mobile.onkeyup = () => {
//     if (FormInputs.mobile.value != '') {
//         if (/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(FormInputs.mobile.value)) {
//             FormInputs.mobile.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.mobile.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.mobile.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.cardNo.onkeyup = () => {
//     if (FormInputs.cardNo.value != '') {
//         if (/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/.test(FormInputs.cardNo.value)) {
//             FormInputs.cardNo.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.cardNo.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.cardNo.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.cvv.onkeyup = () => {
//     if (FormInputs.cvv.value != '') {
//         if (/[0-9]{3}/.test(FormInputs.cvv.value)) {
//             FormInputs.cvv.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.cvv.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.cvv.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.city.onkeyup = () => {

//     if (FormInputs.city.value != '') {
//         if (checkNumber(FormInputs.city.value)) {
//             FormInputs.city.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.city.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.city.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }


// let date = new Date();
// date = date.getFullYear();

// FormInputs.date.min = `${date}-01`;
// FormInputs.date.max = `${date + 20}-01`;

// FormInputs.date.onkeyup = () => {
//     if (FormInputs.date.value != '') {
//         if (/\d{4}-\d{2}$/.test(FormInputs.date.value)) {
//             FormInputs.date.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.date.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.date.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.country.onkeyup = () => {
//     if (FormInputs.country.value != '') {
//         if (checkNumber(FormInputs.country.value)) {
//             FormInputs.country.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.country.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.country.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.province.onkeyup = () => {
//     if (FormInputs.province.value != '') {
//         if (/[A-Z]{2}/.test(FormInputs.province.value)) {
//             FormInputs.province.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.province.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.province.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.cardHolder.onkeyup = () => {
//     if (FormInputs.cardHolder.value != '') {
//         if (/[A-Z]{1}[a-z]{2,15}\s[A-Z]{1}[a-z]{2,15}$/.test(FormInputs.cardHolder.value)) {
//             FormInputs.cardHolder.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.cardHolder.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.cardHolder.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.email.onkeyup = () => {
//     if (FormInputs.email.value != '') {
//         if (/\w(\w|[!#$%&'\+\/=?^_`{|}~])([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+/.test(FormInputs.email.value)) {
//             FormInputs.email.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.email.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.email.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }

// FormInputs.address.onkeyup = () => {
//     if (FormInputs.address.value != '') {
//         if (/^[a-zA-Z0-9\s,'-.]*$/.test(FormInputs.address.value)) {
//             FormInputs.address.style.border = '2px solid #00E676';
//         } else {
//             FormInputs.address.style.border = '2px solid #f44336';
//         }
//     } else {
//         FormInputs.address.style.border = '.5px solid rgba(0,0,0,0.1)';
//     }
// }