import ConsCard from '@/components/common/Card'
import ConsItem from '@/components/common/ConsItem'
import Summary from '@/components/common/Summary'

const MyPlugin = {}

MyPlugin.install = function (Vue) {
  Vue.component("ConsCard", ConsCard)
  Vue.component("ConsItem", ConsItem)
  Vue.component("Summary", Summary)
}

export default MyPlugin
