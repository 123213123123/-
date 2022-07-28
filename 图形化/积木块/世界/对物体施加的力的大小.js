Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("对物体施加的力的大小");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};