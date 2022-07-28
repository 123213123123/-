Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("当玩家")
        .appendField(new Blockly.FieldDropdown([["按下鼠标左键 / 虚拟按钮A","OPTIONNAME"], ["按下 鼠标右键 / 虚拟按钮B","OPTIONNAME"], ["进行蹲下时","OPTIONNAME"], ["落地时","OPTIONNAME"], ["二段跳时","OPTIONNAME"], ["进行跳跃时","OPTIONNAME"], ["进入液体时","OPTIONNAME"], ["离开液体时","OPTIONNAME"], ["正在游泳时","OPTIONNAME"], ["重生时","OPTIONNAME"], ["行走时","OPTIONNAME"], ["飞行时","OPTIONNAME"], ["结束飞行时","OPTIONNAME"]]), "NAME")
        .appendField("播放的音效");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};