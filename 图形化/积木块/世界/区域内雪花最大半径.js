lockly.Blocks['block_type'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["区域内雪花最大半径","OPTIONNAME"], ["区域内雪花最小直径","OPTIONNAME"], ["区域内雪花自旋速度","OPTIONNAME"]]), "NAME")
        .appendField("=");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};