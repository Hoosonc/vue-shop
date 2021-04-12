import { ElButton, ElForm, ElFormItem, ElInput, ElMessage, ElMessageBox} from 'element-plus'

export default (app) => {
  app.use(ElButton).use(ElInput).use(ElFormItem).use(ElForm).use(ElMessage).use(ElMessageBox)
}
