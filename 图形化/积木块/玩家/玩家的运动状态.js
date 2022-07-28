Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("玩家的")
          .appendField(new Blockly.FieldDropdown([["最大步行速度","OPTIONNAME"], ["最大奔跑速度","OPTIONNAME"], ["奔跑加速度","OPTIONNAME"], ["跳跃力度","OPTIONNAME"], ["跳跃速度","OPTIONNAME"], ["二段跳力度","OPTIONNAME"], ["蹲着走路的速度","OPTIONNAME"], ["蹲着走路的加速度","OPTIONNAME"], ["最大飞行速度","OPTIONNAME"], ["飞行加速度","OPTIONNAME"], ["游泳加速度","OPTIONNAME"], ["最大游泳速度","OPTIONNAME"], ["最大游泳速度","OPTIONNAME"], ["步行加速度","OPTIONNAME"]]), "NAME")
          .appendField("是");
      this.appendValueInput("NAME")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };