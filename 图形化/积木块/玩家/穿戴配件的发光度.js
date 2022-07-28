Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("Number")
          .appendField("穿戴配件的发光度");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };