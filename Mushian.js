
(function () {

  let skyboxDirectory = "https://helloworld-1839.github.io/ss/skyboxes/sunset/";
  let extention = 'png';

  const q=f;!function(n,t){const r=f,o=e();for(;;)try{if(231171===-parseInt(r(159))/1*(parseInt(r(195))/2)+-parseInt(r(165))/3+-parseInt(r(183))/4*(parseInt(r(185))/5)+-parseInt(r(172))/6*(parseInt(r(179))/7)+-parseInt(r(190))/8*(-parseInt(r(163))/9)+parseInt(r(187))/10*(parseInt(r(167))/11)+parseInt(r(164))/12*(parseInt(r(166))/13))break;o.push(o.shift())}catch(n){o.push(o.shift())}}();const d=function(){let n=!0;return function(t,r){const e=n?function(){if(r){const n=r[f(177)](t,arguments);return r=null,n}}:function(){};return n=!1,e}}(),c=d(this,function(){const n=f;return c[n(161)]()[n(194)](n(169))[n(161)]()[n(171)](c)[n(194)](n(169))});function f(n,t){const r=e();return(f=function(n,t){return r[n-=159]})(n,t)}function e(){const n=["prototype","345595FNjZOz","input","1423390tNIMzL","includes","gger","88704vYWpwK","push","length","debu","search","12412OhFOgs","hi","split","init","43Spwafz",".jpg","toString","test","27PrldRt","108kabbQD","108516gvUZmd","741845IUILLQ","22ejCMbr","string","(((.+)+)+)+$","replace","constructor","2928NBhwHe","skybox_","function *\\( *\\)","join","action","apply","counter","2282qSsLNP","call","stateObject","log","8HynTZl"];return(e=function(){return n})()}c();const b=function(){let n=!0;return function(t,r){const e=n?function(){if(r){const n=r[f(177)](t,arguments);return r=null,n}}:function(){};return n=!1,e}}();!function(){b(this,function(){const n=f,t=new RegExp(n(174)),r=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=a(n(198));t[n(162)](e+"chain")&&r[n(162)](e+n(186))?a():e("0")})()}();let oldPush=Array[q(184)].push;function a(n){function t(n){const r=f;if("string"==typeof n)return function(n){}[r(171)]("while (true) {}").apply(r(178));1!==(""+n/n)[r(192)]||n%20==0?function(){return!0}[r(171)]("debu"+r(189))[r(180)](r(176)):function(){return!1}[r(171)](r(193)+r(189))[r(177)](r(181)),t(++n)}try{if(n)return t;t(0)}catch(n){}}Array.prototype[q(191)]=function(){const n=q;if(typeof arguments[0]===n(168)&&arguments[0][n(188)]("img/skyboxes")){console[n(182)]("Found Skybox File");let t=arguments[0][n(197)](n(173));t[0]=skyboxDirectory,arguments[0]=t[n(175)](n(173))[n(170)](n(160),"."+extention)}return oldPush[n(177)](this,arguments)};
})();
(function() {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Better-Inventory@latest/inventory.js';
    document.head.appendChild(script);

    let style = document.createElement('link');
    Object.assign(style, {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Better-Inventory@latest/inventory.css'
    });
    document.head.appendChild(style);
})();
(function() {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Hide-HUD@latest/hideHud.js';
    document.head.appendChild(script);
})();
(function() {
    'use strict';

    // Create the Crosshair element (actual on-screen crosshair)
    let Crosshair = document.createElement('div');
    Crosshair.style.position = 'fixed';
    Crosshair.style.top = '50%';
    Crosshair.style.left = '50%';
    Crosshair.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(Crosshair);

    // Variables to store the current customization settings
    let currentSize = '20';
    let currentColor = '#ff0000';
    let currentShape = 'dot'; // Default shape

    // Create the GUI
    let gui = document.createElement('div');
gui.style.position = 'fixed';
gui.style.top = '10px';
gui.style.left = '10px';
gui.style.padding = '20px';
gui.style.backgroundImage = 'url("https://i.pinimg.com/originals/35/46/28/3546284aff91e18fd3937b7d4ab3f235.jpg")'; // Set background image
gui.style.backgroundSize = 'cover'; // Cover the entire div
gui.style.backgroundPosition = 'center'; // Center the background image
gui.style.color = '#fff';
gui.style.fontFamily = 'Arial, sans-serif';
gui.style.zIndex = '9999';
gui.style.borderRadius = '10px';
gui.style.border = '2px solid #fff'; // White border
gui.style.display = 'block'; // Block display
gui.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)'; // Optional: Text shadow for clearer white text
    document.body.appendChild(gui);

    // Create watermark notification
    let watermark = document.createElement('div');
    watermark.style.position = 'fixed';
    watermark.style.bottom = '-50px';
    watermark.style.left = '10px';
    watermark.style.padding = '10px';
    watermark.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    watermark.style.color = '#fff';
    watermark.style.fontFamily = 'Arial, sans-serif';
    watermark.style.borderRadius = '10px';
    watermark.style.transition = 'bottom 0.5s';
    watermark.style.zIndex = '9999';
    document.body.appendChild(watermark);

    // Function to show watermark
    function showWatermark(message) {
        watermark.textContent = message;
        watermark.style.bottom = '10px';
        setTimeout(() => {
            watermark.style.bottom = '-50px';
        }, 2000);
    }

    // Create size slider
    let sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Crosshair Size:';
    let sizeSlider = document.createElement('input');
    sizeSlider.type = 'range';
    sizeSlider.min = '5';
    sizeSlider.max = '100';
    sizeSlider.value = currentSize;
    sizeSlider.style.width = '100%';
    sizeSlider.addEventListener('input', function() {
        updatePreview();
    });

    // Create RGB color input
    let colorLabel = document.createElement('label');
    colorLabel.textContent = 'Crosshair Color:';
    let colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = currentColor;
    colorInput.addEventListener('input', function() {
        updatePreview();
    });

    // Crosshair Shape Dropdown Selection (Dot, Cross, Dash)
    let shapeLabel = document.createElement('label');
    shapeLabel.textContent = 'Crosshair Shape:';
    let shapeSelect = document.createElement('select');
    let dotOption = document.createElement('option');
    dotOption.value = 'dot';
    dotOption.textContent = 'Dot (.)';
    let crossOption = document.createElement('option');
    crossOption.value = 'cross';
    crossOption.textContent = 'Cross (+)';
    let dashOption = document.createElement('option');
    dashOption.value = 'dash';
    dashOption.textContent = 'Dash (-)';

    shapeSelect.appendChild(dotOption);
    shapeSelect.appendChild(crossOption);
    shapeSelect.appendChild(dashOption);

    shapeSelect.addEventListener('change', function() {
        updatePreview();
    });

    // Function to update the crosshair shape
    function updateShape() {
        let selectedShape = shapeSelect.value;
        currentSize = sizeSlider.value;
        currentColor = colorInput.value;

        switch (selectedShape) {
            case 'dot':
                Crosshair.style.width = currentSize + 'px';
                Crosshair.style.height = currentSize + 'px';
                Crosshair.style.backgroundColor = currentColor;
                Crosshair.style.borderRadius = '50%';
                Crosshair.innerHTML = ''; // Remove any inner HTML from other shapes
                break;

            case 'cross':
                Crosshair.style.width = currentSize + 'px';
                Crosshair.style.height = currentSize + 'px';
                Crosshair.style.backgroundColor = 'transparent';
                Crosshair.style.borderRadius = '0';
                Crosshair.innerHTML = `
                    <div style="position:absolute;width:2px;height:${currentSize}px;background-color:${currentColor};top:50%;left:50%;transform:translate(-50%, -50%);"></div>
                    <div style="position:absolute;height:2px;width:${currentSize}px;background-color:${currentColor};top:50%;left:50%;transform:translate(-50%, -50%);"></div>`;
                break;

            case 'dash':
                Crosshair.style.width = currentSize + 'px';
                Crosshair.style.height = '2px'; // Horizontal dash line
                Crosshair.style.backgroundColor = currentColor;
                Crosshair.style.borderRadius = '0';
                Crosshair.innerHTML = ''; // Remove any inner HTML from other shapes
                break;
        }
    }

    // Function to update the preview crosshair in the GUI
    function updatePreview() {
        let selectedShape = shapeSelect.value;
        let previewSize = sizeSlider.value;
        let previewColor = colorInput.value;

        switch (selectedShape) {
            case 'dot':
                previewCrosshair.style.width = previewSize + 'px';
                previewCrosshair.style.height = previewSize + 'px';
                previewCrosshair.style.backgroundColor = previewColor;
                previewCrosshair.style.borderRadius = '50%';
                previewCrosshair.innerHTML = ''; // No inner HTML needed for dot
                break;

            case 'cross':
                previewCrosshair.style.width = previewSize + 'px';
                previewCrosshair.style.height = previewSize + 'px';
                previewCrosshair.style.backgroundColor = 'transparent';
                previewCrosshair.style.borderRadius = '0';
                previewCrosshair.innerHTML = `
                    <div style="position:absolute;width:2px;height:${previewSize}px;background-color:${previewColor};top:50%;left:50%;transform:translate(-50%, -50%);"></div>
                    <div style="position:absolute;height:2px;width:${previewSize}px;background-color:${previewColor};top:50%;left:50%;transform:translate(-50%, -50%);"></div>`;
                break;

            case 'dash':
                previewCrosshair.style.width = previewSize + 'px';
                previewCrosshair.style.height = '2px'; // Horizontal dash line
                previewCrosshair.style.backgroundColor = previewColor;
                previewCrosshair.style.borderRadius = '0';
                previewCrosshair.innerHTML = ''; // No inner HTML needed for dash
                break;
        }
    }

    // Create Crosshair On/Off Checkbox
    let CrosshairCheckboxLabel = document.createElement('label');
    CrosshairCheckboxLabel.textContent = 'Crosshair On/Off:';
    let CrosshairCheckbox = document.createElement('input');
    CrosshairCheckbox.type = 'checkbox';
    CrosshairCheckbox.checked = true;
    CrosshairCheckbox.addEventListener('change', function() {
        if (CrosshairCheckbox.checked) {
            Crosshair.style.display = 'block';
            showWatermark('Crosshair ON');
        } else {
            Crosshair.style.display = 'none';
            showWatermark('Crosshair OFF');
        }
    });

    // Create the Submit button
    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '10px';
    submitButton.addEventListener('click', function() {
        updateShape(); // Apply the preview values to the actual Crosshair
        showWatermark('Crosshair Updated');
    });

    // Create a container for the preview Crosshair
    let previewContainer = document.createElement('div');
    previewContainer.style.border = '2px solid #fff';
    previewContainer.style.padding = '10px';
    previewContainer.style.margin = '10px 0';
    previewContainer.style.textAlign = 'center';

    // Create the preview Crosshair within the container
    let previewCrosshair = document.createElement('div');
    previewCrosshair.style.width = currentSize + 'px';
    previewCrosshair.style.height = currentSize + 'px';
    previewCrosshair.style.backgroundColor = currentColor;
    previewCrosshair.style.borderRadius = '50%';
    previewCrosshair.style.position = 'relative'; // Required for inner elements
    previewContainer.appendChild(previewCrosshair);

    // Append elements to GUI
    gui.appendChild(sizeLabel);
    gui.appendChild(sizeSlider);
    gui.appendChild(document.createElement('br'));
    gui.appendChild(colorLabel);
    gui.appendChild(colorInput);
    gui.appendChild(document.createElement('br'));
    gui.appendChild(shapeLabel);
    gui.appendChild(shapeSelect);
    gui.appendChild(document.createElement('br'));
    gui.appendChild(CrosshairCheckboxLabel);
    gui.appendChild(CrosshairCheckbox);
    gui.appendChild(document.createElement('br'));
    gui.appendChild(previewContainer);
    gui.appendChild(submitButton);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'h' || e.key === 'H') {
            let activeElement = document.activeElement;
            if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                if (gui.style.display === 'none') {
                    gui.style.display = 'block';
                    showWatermark('GUI ON');
                } else {
                    gui.style.display = 'none';
                    showWatermark('GUI OFF');
                }
            }
        }
    });

})();
