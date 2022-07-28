Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("Number")
          .appendField("实体的")
          .appendField(new Blockly.FieldDropdown([["颜色","OPTIONNAME"], ["缩放比例","OPTIONNAME"], ["旋转角度","OPTIONNAME"], ["金属感","OPTIONNAME"], ["发光度","OPTIONNAME"], ["反光度","OPTIONNAME"]]), "NAME")
          .appendField("=");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };