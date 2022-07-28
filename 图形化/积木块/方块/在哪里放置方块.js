Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("在");
      this.appendDummyInput()
          .appendField("放置方块")
          .appendField("方块类型");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };