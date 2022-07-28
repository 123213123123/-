Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("X");
      this.appendValueInput("NAME")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("Y");
      this.appendValueInput("NAME")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("Z");
      this.appendValueInput("NAME")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };