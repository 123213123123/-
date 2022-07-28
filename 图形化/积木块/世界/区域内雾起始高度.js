Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("Number")
          .appendField("区域内雾起始高度");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };