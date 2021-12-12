const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: '1. Initial Contact',
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: '2. Demonstration',
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: '3. Proposal',
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: '4. Negotiation',
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: '5. Order',
    SUCCESS: 100,
  },
];

const Module = class {
  constructor() {

  }

  start() {
    // Start modifying the form elements here!
    // You are allowed to add extra methods and properties to this class

    const select = document.querySelector('select');
    const submit = document.querySelector('[type="submit"]');
    const input = document.querySelector('[name="success"]');
    const outputText = document.querySelector('div[class="output"]');
    let selectedOption = select.options[select.selectedIndex];
    const updateSelectedOption = () => {
      selectedOption = select.options[select.selectedIndex];
    };
    const updateOutputValue = (selectedOption, inputValue) => {
      const text = `{"status":${selectedOption.value},"success":${inputValue}}`;
      outputText.textContent = text;
    };
    const handleChange = (selectedOption) => {
      input.value = selectedOption.success;
    };
    const handleSubmit = (selectedOption, inputValue) => {
      updateOutputValue(selectedOption, inputValue);
    };

    const addOptions = () => {
      for (let i = 0; i < oppoStatus.length; i++) {
        const selectOption = document.createElement('option');
        selectOption.text = oppoStatus[i].STATUS;
        selectOption.value = oppoStatus[i].K_OPPO_STATUS;
        selectOption.success = oppoStatus[i].SUCCESS;
        select.add(selectOption);
      }
      // select status 1 by default
      select.selectedIndex = 0;
      updateSelectedOption();
    };
    addOptions();

    select.addEventListener('change', () => {
      updateSelectedOption();
      handleChange(selectedOption);
    });
    submit.addEventListener('click', (e) => {
      e.preventDefault();
      handleSubmit(selectedOption, input.value);
    });
  }
};

const main = new Module();
main.start();
