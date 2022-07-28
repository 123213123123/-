Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("进入实体互动的范围")
          .appendField(new Blockly.FieldDropdown([["实体身上出现的提示文本","OPTIONNAME"], ["提示文本的字体颜色","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };