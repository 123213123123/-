Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("对话框样式类型")
          .appendField(new Blockly.FieldDropdown([["\t文本样式对话框","OPTIONNAME"], ["\t输入样式对话框","OPTIONNAME"], ["选择样式对话框","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };