Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("玩家的运动状态")
        .appendField(new Blockly.FieldDropdown([["飞行中","OPTIONNAME"], ["在地上","OPTIONNAME"], ["游泳中","OPTIONNAME"], ["下落中","OPTIONNAME"], ["跳跃中","OPTIONNAME"], ["\t二段跳中","OPTIONNAME"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};