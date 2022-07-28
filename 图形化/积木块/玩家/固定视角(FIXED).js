Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("固定视角(FIXED)")
          .appendField(new Blockly.FieldDropdown([["镜头的眼睛位置","OPTIONNAME"], ["镜头所朝向的目标点","OPTIONNAME"], ["镜头向上的矢量","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };