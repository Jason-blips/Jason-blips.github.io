/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    "system";

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").text("dark");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").text("light");
  } else if (use_theme === "system") {
    // Use system preference
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (systemPref === "dark") {
      $("html").attr("data-theme", "dark");
    } else {
      $("html").removeAttr("data-theme");
    }
    $("#theme-icon").text("auto");
  }
  
  // Save theme setting
  if (use_theme) {
    localStorage.setItem("theme", use_theme);
  }
  
  // Update dropdown active state if function exists
  if (typeof updateThemeDropdown === 'function') {
    setTimeout(updateThemeDropdown, 0);
  }
};

// Set theme from dropdown selection
var selectTheme = (theme) => {
  if (theme === "light" || theme === "dark" || theme === "system") {
    setTheme(theme);
    updateThemeDropdown();
    closeThemeDropdown();
  }
};

// Update dropdown active state
var updateThemeDropdown = () => {
  const current_setting = determineThemeSetting();
  $(".theme-option").removeClass("active");
  $(`.theme-option[data-theme="${current_setting}"]`).addClass("active");
};

// Toggle dropdown menu
var toggleThemeDropdown = () => {
  const $menu = $("#theme-dropdown-menu");
  $menu.toggle();
};

// Close dropdown menu
var closeThemeDropdown = () => {
  $("#theme-dropdown-menu").hide();
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // Initialize theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system")) {
    setTheme(savedTheme);
  } else {
    // Default to system if no preference saved
    setTheme("system");
  }
  
  // Listen for system theme changes when in system mode
  const systemThemeListener = (e) => {
    const current_setting = determineThemeSetting();
    if (current_setting === "system") {
      // Update theme based on system preference change
      const systemPref = e.matches ? 'dark' : 'light';
      if (systemPref === "dark") {
        $("html").attr("data-theme", "dark");
      } else {
        $("html").removeAttr("data-theme");
      }
    }
  };
  
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", systemThemeListener);

  // Enable the theme dropdown
  $('#theme-toggle-link').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleThemeDropdown();
  });
  
  // Handle theme option clicks
  $('.theme-option').on('click', function(e) {
    e.preventDefault();
    const theme = $(this).data('theme');
    selectTheme(theme);
  });
  
  // Close dropdown when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('#theme-toggle').length) {
      closeThemeDropdown();
    }
  });
  
  // Update dropdown active state on page load
  updateThemeDropdown();

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
