const translations = {
    en: {
        l1: "LOGIN",
        em : "Email",
        ph: "Phone Number",
        p :"Password",
        btn :"login",
        fp: "Forget Password",
        ha :"don’t have an account?",
        s:"signup",
        // sign up
        si:"SIGN UP"
    },
    ar: {
        l1: "تسجيل الدخول",
        em : "البريد الالكتروني",
        ph: "رقم الهاتف",
        p :"كلمة السر",
        btn :"تسجيل الدخول",
        fp: "نسيت كلمة السر؟",
        ha :"ليس لديك حساب؟",
        s:"تسجيل",
        sign: "تسجيل"
    },
    fr: {
        l1: "CONNEXION",
        em : "Email",
        ph: "Numéro de téléphone",
        p :"Mot de passe",
        btn :"connexion",
        fp: "Mot de passe oublié?",
        ha :"vous n'avez pas de compte ?",
        s:"s'inscrire"
    }, 
     gr: {
        l1: "EINLOGGEN",
        em : "E-Mail",
        ph: "Telefonnummer",
        p :"Passwort",
        btn :"einloggen",
        fp: "Passwort vergessen?",
        ha :"Habben Sie kein Konto?",
        s:"Registrierung"
    }
};

function changeLanguage(language) {
    // login
    document.getElementById("l1").innerText = translations[language].l1;
    document.getElementById("phone").placeholder = translations[language].ph;
    document.getElementById("email").placeholder = translations[language].em ;
    document.getElementById("p").placeholder = translations[language].p;
    document.getElementById("submit").value = translations[language].btn;
    document.getElementById("fp").innerText= translations[language].fp;
    document.getElementById("ha").innerText = translations[language].ha;
    document.getElementById("a1").innerText = translations[language].s;
   
    if(language === 'ar'){
        document.getElementById("p").style.textAlign='right';
        document.getElementById("phone").style.textAlign='right';
        document.getElementById("email").style.textAlign='right';
    }else{
        document.getElementById("p").style.textAlign='left';
        document.getElementById("phone").style.textAlign='left';
        document.getElementById("email").style.textAlign='left';
    }

  
    localStorage.setItem('selectedLanguage', language);
}

// window.onload = function() {
//     const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; 
    
//     changeLanguage(savedLanguage);
    
//     document.getElementById("language-select").value = savedLanguage;
// };
window.onload = function() {
    const userResponse = confirm("هل ترغب في حفظ التعديلات؟");
    if (userResponse) {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; 
    
        changeLanguage(savedLanguage);
        
        
        document.getElementById("language-select").value = savedLanguage;
        alert("تم حفظ التعديلات!");
    } else {
        alert("لم يتم حفظ التعديلات.");
    }
};
