Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("事件触发时间");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};