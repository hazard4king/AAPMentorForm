const rangeConstant = {
    NAME: { min: 3, max: 50 },
    EMAIL: { min: 5, max: 128 },
    MENTORID: { min: 12, max: 15 }
}

const lengthRange = ( value, min, max ) => {
    if ( value.length <= max && value.length >= min ) {
        return true;
    }
    else {
        return false;
    }
}

const alphanumeric = ( text ) => {
    let letterNumber = /^[0-9a-zA-Z]+$/;
    if ( ( text.match( letterNumber ) ) ) {
        return true;
    }
    else {
        return false;
    }
}

const removeAllWhiteSpace = ( value ) => {
    return value.replace( /\s/g, "" );
}

const nameCheck = ( name ) => {
    name = removeAllWhiteSpace( name );
    if ( alphanumeric( name ) && lengthRange( name, rangeConstant.NAME.min, rangeConstant.NAME.max ) ) {
        return true;
    }
    else {
        alert( "Please enter your name." );
        name.focus();
        return false;
    }
}

const mentoridCheck = ( mentorid ) => {
    if ( alphanumeric( mentorid ) && lengthRange( mentorid, rangeConstant.MENTORID.min, rangeConstant.MENTORID.max ) ) {
        return true;
    }
    else {
        alert( "Please enter a valid BITS ID." );
        mentorid.focus();
        return false;
    }
}


const emailCheck = ( email ) => {
    if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( email )
        && lengthRange( email, rangeConstant.EMAIL.min, rangeConstant.EMAIL.max ) ) {
        return ( true );
    }
    else {
        alert( "Please enter a valid e-mail address." );
        email.focus();
        return false;
    }
}

const phoneCheck = ( phone ) => {
    phone = removeAllWhiteSpace( phone );

    let phoneno = /^\d{10}$/;

    if ( phoneno.test( phone ) ) {
        return true;
    }
    else {
        alert( "Please enter correct phone number." );
        phone.focus();
        return false;
    }
}

// if else conditions to be added from here 
const SubjectCheck = ( subject ) => {

    if ( subject.selectedIndex < 1 ) {
        alert( "Please a subject" );
        subject.focus();
        return false;
    }
}
