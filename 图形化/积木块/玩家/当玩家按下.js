Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("当玩家按下")
          .appendField(new Blockly.FieldDropdown([["下蹲按钮","OPTIONNAME"], ["步行按钮","OPTIONNAME"], ["跳跃按钮","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };