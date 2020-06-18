exports.rangeConstant = {
    NAME: { min: 3, max: 50 },
    EMAIL: { min: 5, max: 128 },
    MENTORID: { min: 12, max: 15 }
}

exports.lengthRange = ( value, min, max ) => {
    if ( value.length <= max && value.length >= min ) {
        return true;
    }
    else {
        return false;
    }
}

exports.alphanumeric = ( text ) => {
    let letterNumber = /^[0-9a-zA-Z]+$/;
    if ( ( text.match( letterNumber ) ) ) {
        return true;
    }
    else {
        return false;
    }
}

exports.removeAllWhiteSpace = ( value ) => {
    return value.replace( /\s/g, "" );
}

exports.nameCheck = ( name ) => {
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

exports.mentoridCheck = ( mentorid ) => {
    if ( alphanumeric( mentorid ) && lengthRange( mentorid, rangeConstant.MENTORID.min, rangeConstant.MENTORID.max ) ) {
        return true;
    }
    else {
        alert( "Please enter a valid BITS ID." );
        mentorid.focus();
        return false;
    }
}


exports.emailCheck = ( email ) => {
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

exports.phoneCheck = ( phone ) => {
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


