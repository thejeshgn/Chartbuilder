import React from 'react';

const logo = React.createClass({ 
  
  render: function () {

    const styles0 = { fill : '#000000'}; 
    const stylesF = { fill : '#FFFFFF'};

    const mult = 0.16;

    const translate = [this.props.transform.left / mult, (this.props.transform.bottom - 55) / mult];

    return (<g transform={"scale("+ mult + ") translate(" + translate + ")"}>
              <path style={styles0} d="M250.45,222.932l72.96,69.456v-65.043h23.607V347.83l-72.81-70.832v66.871H250.45V222.926V222.932z M385.099,294.215h21.629
                c4.875,0.15,13.862,5.025,13.862,15.232c0,10.509-9.138,15.077-14.47,15.534h-21.021v-30.772V294.215z M361.035,343.719h56.663
                c13.399,0,29.089-13.099,29.089-30.923c0-18.28-11.878-27.267-19.645-30.923c0,0,14.318-8.073,13.705-25.434
                c-0.763-23.306-22.392-29.095-30.008-29.095h-49.805v116.368V343.719z M384.948,246.845h17.668
                c5.944,0.457,13.099,5.031,13.099,13.255c0,7.767-5.482,13.255-12.643,14.169h-18.124v-27.418V246.845z M536.044,251.42
                c-24.982-16.604-58.797,0.306-60.925,31.072c-0.914,37.319,35.948,52.702,60.925,36.556v23.913
                c-44.171,16.453-84.693-14.626-84.838-59.705c0.15-38.238,42.344-72.046,84.838-55.142V251.42z M567.019,222.932l72.954,69.456
                v-65.043h23.613V347.83l-72.811-70.832v66.871h-23.763V222.926L567.019,222.932z M698.319,247.609v27.111h37.926v20.565h-37.926
                v27.874h37.926v20.56h-61.688V227.351h61.688v20.258H698.319z M765.184,227.351l30.772,68.241l10.965-24.521l-20.565-43.715h24.22
                l7.616,18.125l7.311-18.125h23.763l-19.651,43.564l10.971,24.677l29.396-68.242h26.048l-53.314,120.937l-23.914-51.331
                l-23.763,51.481l-54.83-121.093H765.184L765.184,227.351z M927.857,224.152c2.134,0,13.255,0.607,23.919,7.009v22.699
                c-6.246-3.961-14.476-9.293-22.393-9.293c-9.6,0-15.689,7.159-15.689,13.706c0,16.603,46.306,15.082,46.306,51.788
                c0,12.186-8.687,37.318-39.302,37.318c-0.607,0-10.052,0.914-26.505-7.616v-25.283c9.144,9.9,20.565,12.485,24.983,12.485
                c9.901,0,17.061-7.761,17.061-17.205c0-18.13-45.086-14.775-45.086-51.487C891.151,238.321,908.212,224.152,927.857,224.152"/>
              <path style={stylesF} d="M200.108,344.146c17.911,0,27.852-15.47,26.747-30.061c-1.77-19.01-19.229-26.308-28.736-24.758
                c7.958-4.424,18.564-25.203,2.429-41.558c-12.821-12.156-29.182-7.738-34.924-2.429c3.094-10.167-1.989-31.171-22.768-34.485
                c-18.79-2.209-26.967,10.832-29.396,17.02c-3.54-8.842-12.156-18.35-28.297-17.02c-20.559,2.209-26.967,21.883-23.873,33.6
                c-8.177-5.529-22.103-7.958-34.259,2.429c-15.695,15.695-7.298,36.913,1.324,41.997c-9.507-0.885-24.538,5.529-27.852,22.323
                c-3.539,20.778,12.382,32.935,27.852,32.935h171.759L200.108,344.146z"/>
              <path style={styles0} d="M67.211,260.146l31.611,72.283l-65.211-44.651c-16.36-10.832-13.041-29.401-3.979-37.579
                c12.821-10.832,30.94-7.073,37.573,9.947"/>
              <path style={styles0} d="M110.805,243.121l-11.497,80.906L66.593,247.1c-7.073-19.234,8.842-31.83,19.455-32.05
                C98.203,213.725,113.459,223.007,110.805,243.121"/>
              <path style={styles0} d="M160.54,246.886l-32.495,77.147l-10.393-69.629c-0.879-10.606,5.749-10.832,8.178-12.821l-3.759-1.55h-6.194
                c-0.659-18.125,13.486-26.082,24.983-25.203c12.381,0.439,26.302,14.811,19.674,32.05"/>
              <path style={styles0} d="M193.694,287.339l-65.21,44.871l30.726-71.398c9.288-22.554,30.952-18.13,38.684-9.507
                C206.29,259.707,208.725,276.727,193.694,287.339"/>
              <path style={styles0} d="M200.547,340.168H125.17l61.226-42.662c15.036-9.947,30.946-0.885,35.15,12.156c4.424,14.585-5.528,30.5-20.999,30.5"/>
              <path style={styles0} d="M5.361,308.777c5.749-15.031,21.664-20.34,35.815-11.271l61.232,42.662H28.135c-15.476,0-27.632-14.146-22.774-31.386"/>
            </g>)
  }
});

module.exports = logo;
