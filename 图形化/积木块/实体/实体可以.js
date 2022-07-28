Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("实体")
        .appendField(new Blockly.FieldDropdown([["可产生粒子总数的上限","OPTIONNAME"], ["所产生粒子的大小变化","OPTIONNAME"], ["所产生粒子能存活的秒数","OPTIONNAME"], ["每秒产生粒子的数量","OPTIONNAME"], ["所产生粒子的初始速度","OPTIONNAME"], ["可产生粒子总数的上限","OPTIONNAME"], ["所产生粒子的阻尼系数","OPTIONNAME"], ["所产生粒子的加速度","OPTIONNAME"], ["所产生粒子的加速度","OPTIONNAME"], ["所产生粒子摆动的最大幅度","OPTIONNAME"], ["所产生粒子摆动的频率","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};