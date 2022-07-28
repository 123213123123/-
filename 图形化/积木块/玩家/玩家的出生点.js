Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("玩家的出生点");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  }