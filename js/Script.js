const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

// Menu toggle
btn.addEventListener('click', () => {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden', 'fade-out');
        nav.classList.add('fade-in');
    } else {
        nav.classList.remove('fade-in');
        nav.classList.add('fade-out');
        nav.addEventListener('animationend', () => {
            nav.classList.add('hidden');
        }, { once: true });
    }

    btn.classList.toggle('open'); 
});

// Reset menu when resizing
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { //
        nav.classList.add('hidden');  
        nav.classList.remove('fade-in', 'fade-out');
        btn.classList.remove('open'); 
    }
});




// Pricing Toggle Script
document.addEventListener("DOMContentLoaded", () => {
  const billingToggle = document.getElementById("billing-toggle");
  const savingsLabel = document.getElementById("savings-label");
  const pricingEls = document.querySelectorAll(".pricing-price");
  const proCTA = document.querySelector(".pro-cta");

  function animateValue(el, start, end, duration) {
    let startTime = null;

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = `$${value}/mo`;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  function updatePrices(isYearly) {
    pricingEls.forEach((el) => {
      const monthly = parseInt(el.dataset.monthly);
      const yearly = parseInt(el.dataset.yearly);
      const newPrice = isYearly ? yearly / 12 : monthly;
      const oldPrice = parseInt(el.textContent.replace(/\D/g, "")) || monthly;

      animateValue(el, oldPrice, newPrice, 600);
    });

    if (proCTA) {
      proCTA.textContent = isYearly ? "Get Yearly Deal 🎁" : "Start Free Trial";
    }

    savingsLabel.classList.toggle("hidden", !isYearly);
  }

  // Run once on load
  updatePrices(billingToggle.checked);

  // Toggle listener
  billingToggle.addEventListener("change", () => {
    updatePrices(billingToggle.checked);
  });
});


// Users Growth Chart
const ctx = document.getElementById("usersChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Active Users",
        data: [120, 190, 300, 500, 700, 950, 1200],
        borderColor: "#f25f3a",
        backgroundColor: "rgba(242, 95, 58, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#f25f3a",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// FAQ accordion toggle
document.querySelectorAll(".faq-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector("svg");

    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  });
});


// Sticky Navbar Scroll Effect with Shrink
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const inner = document.getElementById("navbar-inner");

  if (window.scrollY > 50) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-white", "shadow-md");

    // shrink inner padding
    inner.classList.remove("py-6");
    inner.classList.add("py-3");
  } else {
    navbar.classList.remove("bg-white", "shadow-md");
    navbar.classList.add("bg-transparent");

    // reset inner padding
    inner.classList.remove("py-3");
    inner.classList.add("py-6");
  }
});

const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// load preference
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});
