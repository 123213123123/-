Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("区域内最大雾量");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};