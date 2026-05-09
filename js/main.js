// Definimos un objeto global para almacenar las referencias.
const DOM = {};

// Contador de globos explotados. 
let poppedBalloons = 0;

// Definimos las URLs para compartir.
const url = "https://santycubillos.github.io/HappyHolidays/";
let urlShare = "";

function initDOMReferences() {
  // Contenedores y listas.
  DOM.balloonContainers = document.querySelectorAll(".balloonContainer");
  DOM.balloons = Array.from(DOM.balloonContainers);
  
  // Elementos de interfaz.
  DOM.toolTip = document.querySelector(".toolTip");
  DOM.messageContainer = document.querySelector(".messageContainer");
  DOM.messageTitle = document.querySelector(".messageTitle");
  DOM.messageText = document.querySelector(".messageText");
  
  // Elementos de texto específicos.
  DOM.balloonEvent = document.getElementById('balloonEvent');
  DOM.balloonName = document.getElementById('balloonName');
  
  // Audio.
  DOM.balloonSound = new Audio("./audio/balloon-burst.mp3");
  DOM.balloonSound.preload = "auto";
  
  // Contenedores de color.
  DOM.primaryElements = document.querySelectorAll('.primaryColor');
  DOM.secondaryElements = document.querySelectorAll('.secondaryColor');
  DOM.primaryContainer = document.getElementById('PrimaryContainer');
  DOM.secondaryContainer = document.getElementById('SecondaryContainer');
  
  // Botones
  DOM.resetButton = document.querySelector('.resetButton');
  DOM.messageButton = document.querySelector('.messageButton');

  // Elementos de formulario.
  DOM.colorBalloon = document.documentElement;
  DOM.form = document.querySelector('.form');
  DOM.formContainer = document.querySelector('.formContainer');
  DOM.inputName = document.querySelector('.inputName');
  DOM.selectEvent = document.querySelector('.selectEvent');
  DOM.formButton = document.querySelector('.formButton');
  DOM.formBack = document.querySelector('.formBack');
  DOM.formError = document.querySelector('.formError');
  DOM.formLink = document.querySelector('.formLink');
  DOM.shareWhatsApp = document.querySelector('.shareWhatsApp');
  DOM.shareTelegram = document.querySelector('.shareTelegram');
}

// Crea el fondo de estrellas.
function createStars(){
  for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = Math.random() * 3 + "px";
    star.style.height = star.style.width;
    star.style.background = "white";
    star.style.opacity = Math.random() * 0.7;
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.borderRadius = "50%";
    star.style.zIndex = "1";
    document.body.appendChild(star);
  }
}

// Inicializa las referencias del DOM y crea el fondo de estrellas. 
initDOMReferences();
createStars();

// Bucle para asignar el evento de clic/tap a cada globo. 
DOM.balloons.forEach(function(container) {
  container.addEventListener('click', function(e) {
    // Elimina el tooltip al explotar los globos. 
    if (DOM.toolTip) {
      DOM.toolTip.style.opacity = '0';
      //DOM.toolTip.style.transform = "translate(-50%, -50%) scale(0.8)";
      // Reproduce audio de explosión de los globos.
      DOM.balloonSound.currentTime = 0;
      DOM.balloonSound.play();
      setTimeout(function() {
        DOM.toolTip.style.visibility = 'hidden';
      }, 900);
    }
    
    // Obtiene el color del globo desde el atributo data-color. 
    const balloonsColor = this.getAttribute('data-color');
    
    // Calcula el centro del globo para la animación de explosión. 
    const balloon = this.querySelector('.balloon');
    const rect = balloon.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Crea 50 partículas para la explosión. 
    for (let i = 0; i < 50; i++){
      createParticle(centerX, centerY, balloonsColor);
    }
     
    // Oculta el globo explotado y suma al contador poppedBalloons. 
    this.style.display = 'none';
    poppedBalloons++;

    // Si se han explotado todos los globos, muestra el mensaje. 
    if (poppedBalloons === DOM.balloons.length){
      setTimeout(function() {
        DOM.messageContainer.classList.add('visible');
        DOM.messageContainer.style.display = 'block';
      }, 300);
    }
  });

  // Función para crear las partículas, se asigna la dirección velocidad y color.
  function createParticle(x, y, color) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Tamaño aleatorio para cada partícula.
    const size = Math.random() * 8 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = color;
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.boxShadow = '0 0 10px ' + color;

    // Lógica matemática para dispersar las partículas en todas direcciones. 
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 300 + 100;
    const tx = Math.cos(angle) * speed;
    const ty = Math.sin(angle) * speed;

    // Pasa las coordenadas de destino al CSS para la animación  explode.
    particle.style.setProperty('--tx', tx + 'px');
    particle.style.setProperty('--ty', ty + 'px');

    // Ejecuta la animación y elimina la partícula del DOM al terminar para liberar memoria. 
    particle.style.animation = 'explode ' + (Math.random() * 0.5 + 0.5) + 's forwards cubic-bezier(0.12, 0, 0.39, 0)';
    document.body.appendChild(particle);
    setTimeout(function() { particle.remove(); }, 1000);
  }
});

// Función para el cambiar el contenido dependiendo de datos obtenidos de la URL.
document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);

  const eventParam = params.get('event') && params.get('event').toUpperCase().trim();
  const nameParam = params.get('name') && params.get('name').toUpperCase().trim();
  
  if (nameParam && eventParam) {
    sessionStorage.setItem('event', eventParam);
    sessionStorage.setItem('name', nameParam);
    window.history.replaceState({}, document.title, window.location.pathname);
  }
  
  const event = (eventParam || sessionStorage.getItem('event')) ? `¡FELIZ ${(decodeURIComponent(eventParam || sessionStorage.getItem('event'))).toUpperCase()}!` : "HAPPY HOLIDAYS";
  const name = nameParam ? decodeURIComponent(nameParam).toUpperCase() : sessionStorage.getItem('name')  || "FESTEJADO";

  document.title = event;
  DOM.balloonEvent.textContent = event;
  DOM.balloonName.textContent = name;
  DOM.messageTitle.textContent = name;
  
  if (event) {
    //Pasamos el evento a mayúsculas para que coincida siempre con el diccionario.

    const specialMessages = {
      "¡FELIZ CUMPLEAÑOS!": {
        message: "Hoy celebramos a alguien increíble: ¡Tú! Que este nuevo año de vida esté lleno de sueños cumplidos, risas sinceras y momentos inolvidables.",
        primaryColor: "#E91163",
        secondaryColor: "#007BFF"
      },
      "¡FELIZ DÍA DE LA MADRE!": {
        message: "Gracias por tu amor infinito y tu fuerza cada día. Tu cariño ilumina la vida de todos los que te rodean. Hoy celebramos a una persona maravillosa e irreemplazable.",
        primaryColor: "#FF477E",
        secondaryColor: "#9D4EDD"
      },
      "¡FELIZ DÍA DEL PADRE!": {
        message: "Gracias por ser ejemplo, apoyo y guía en cada paso. Tus consejos, esfuerzo y cariño hacen la diferencia todos los días. Eres inspiración y fortaleza para quienes te aman.",
        primaryColor: "#007BFF",
        secondaryColor: "#0097A7"
      },
      "¡FELIZ DÍA DEL MAESTRO!": {
        message: "Gracias por enseñar con pasión y dejar huellas para toda la vida. Cada palabra, consejo y enseñanza ayuda a construir sueños. Tu dedicación cambia el mundo más de lo que imaginas.",
        primaryColor: "#0023F5",
        secondaryColor: "#FF3D00"
      },
      "¡FELIZ NAVIDAD!": {
        message: "Que la paz, la alegría y el amor llenen sus hogares en estas fechas especiales. Gracias por compartir momentos, risas y recuerdos inolvidables. Lo mejor de cada celebración es vivirla junto a ustedes.",
        primaryColor: "#2E7D32",
        secondaryColor: "#C62828"
      },
      "¡FELIZ AÑO NUEVO 2027!": {
        message: "¡Que la paz, la alegría y el amor llenen sus hogares en estas fechas especiales. Gracias por compartir momentos, risas y recuerdos inolvidables. Lo mejor de cada celebración es vivirla junto a ustedes.",
        primaryColor: "#D4AF37",
        secondaryColor: "#917200"
      }
    };

    const configuration = specialMessages[event];
    if (configuration) {
      DOM.colorBalloon.style.setProperty('--primaryBalloon', configuration.primaryColor);
      DOM.colorBalloon.style.setProperty('--secondaryBalloon', configuration.secondaryColor);
      DOM.primaryContainer.dataset.color = configuration.primaryColor;
      DOM.secondaryContainer.dataset.color = configuration.secondaryColor;
      DOM.messageText.textContent = configuration.message || "¡Disfruta de este día tan especial!";
    }

    if (name === "FOX HELEN" || name === "NAZIK") {
      DOM.balloonEvent.textContent = "С ДНЕМ РОЖДЕНИЯ!";
      DOM.toolTip.textContent = "Нажмите или щелкните по воздушным шарикам, чтобы лопнуть их! 🎈";
      DOM.messageText.textContent = "Привет! Спасибо, что вдохновляешь нас своим контентом. Наслаждайся этим особенным днем!";
      DOM.resetButton.textContent = "🎈 Надуйте воздушные шарики снова";
      DOM.messageButton.style.display = "none";
    }

    const ariaEvent = document.querySelector('#PrimaryContainer');
    const ariaName = document.querySelector('#SecondaryContainer');
    
    if (ariaEvent && ariaName) {
      ariaEvent.setAttribute('aria-label', `Globo con la festividad ${event}. Presiona Enter para explotar.`);
      ariaName.setAttribute('aria-label', `Globo con el nombre ${name}. Presiona Enter para explotar.`);
    }
  }
});

// Función para crear y compartir un enlace de mensaje personalizado.
DOM.formButton.addEventListener('click', function(e) {
  const event = DOM.selectEvent.value.trim();
  const name = DOM.inputName.value.toUpperCase().trim();

  if (!name) {
    DOM.formError.textContent = "Ingrese el nombre del festejado.";
    setTimeout(() => {
      DOM.inputName.focus();f
    }, 10);
    return;
  }

  const eventEncoded = encodeURIComponent(event);
  const nameEncoded = encodeURIComponent(name);
  urlShare = `${url}?name=${nameEncoded}&event=${eventEncoded}`;
  DOM.formLink.textContent = urlShare;
  DOM.inputName.value = "";

  const messageShare = `¡Hola! He preparado algo especial para ti por ${event}. Ingresa al siguiente enlace para ver tu mensaje`;
 
  DOM.shareWhatsApp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(messageShare + " " + urlShare)}`;
  DOM.shareTelegram.href = `https://t.me/share/url?url=${encodeURIComponent(urlShare)}&text=${encodeURIComponent(messageShare)}`;
  DOM.shareWhatsApp.classList.add('active');
  DOM.shareTelegram.classList.add('active');
});

// Función para bloquear el enlace de compartir si el formulario no está completo.
DOM.shareWhatsApp.addEventListener('click', function(e)  {
  if (!DOM.shareWhatsApp.classList.contains('active')) {
    e.preventDefault();
    DOM.formError.textContent = "Enlace bloqueado: Formulario incompleto Por favor, ingresa el nombre del festejado y selecciona una festividad.";
    setTimeout(() => {
      DOM.inputName.focus();
    }, 10);
  }
});

DOM.shareTelegram.addEventListener('click', function(e)  {
  if (!DOM.shareWhatsApp.classList.contains('active')) {
    e.preventDefault();
    DOM.formError.textContent = "Enlace bloqueado: Formulario incompleto Por favor, ingresa el nombre del festejado y selecciona una festividad.";
    setTimeout(() => {
      DOM.inputName.focus();
    }, 10);
  }
});

// Función para evitar que se recargue la página al enviar el formulario.
DOM.form.addEventListener('submit', function(e) {
  e.preventDefault();
});

// Función para validar que el usuario solo ingrese letras y espacios en el campo de nombre.
DOM.inputName.addEventListener('input', function(e) {
  const validName = e.target.value;
  const validChar = validName.replace(/[^a-zA-ZáéíóúÁÉÍÓÚÑn'\s.]+/g, "");
  if (validName !== validChar) {
    e.target.value = validChar
    DOM.formError.textContent = "Carácter no válido eliminado: ingrese solo letras, puntos y espacios.";
    DOM.inputName.style.backgroundColor = "#ffe6e6";
  } else {
    DOM.formError.textContent = "";
    DOM.inputName.style.borderColor = "";
    DOM.inputName.style.backgroundColor = "";
  }
});

// Función para regresar al mensaje personalizado.
DOM.formBack.addEventListener('click', function() {
  DOM.formContainer.classList.remove('visible');
  DOM.messageContainer.classList.add('visible');
});

//Función para mostrar el formulario.
DOM.messageButton.addEventListener('click', function() {
  DOM.messageContainer.classList.remove('visible');
  DOM.formContainer.classList.add('visible');
});
 
// Función para el botón de reinicio, vuelve a mostrar los globos para jugar de nuevo.
DOM.resetButton.addEventListener('click', function() {
  DOM.messageContainer.classList.remove('visible');    
  DOM.balloons.forEach(function(container) {
    container.style.display = 'flex';
    DOM.toolTip.style.visibility = 'visible'; 
    DOM.toolTip.style.opacity = '1';
    DOM.toolTip.style.transform = "translate(-50%, -50%) scale(1)";  
  } );
  poppedBalloons = 0;            
});