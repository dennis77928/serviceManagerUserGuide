(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{379:function(a,t,s){},424:function(a,t,s){"use strict";s(379)},438:function(a,t,s){"use strict";s.r(t);s(424);var e=s(58),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"saas-應用管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#saas-應用管理"}},[a._v("#")]),a._v(" SaaS 應用管理")]),a._v(" "),s("p",[a._v("在 Service List 的頁面，會顯示所有安裝在該 Namespace 下的 SaaS 應用及其狀態。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/1_tenats/serviceList.png",alt:"service list"}})]),a._v(" "),s("p",[a._v("在此頁面針對 SaaS 應用可以進行:")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#部署"}},[a._v("部署")])]),s("li",[s("a",{attrs:{href:"#刪除"}},[a._v("刪除")])]),s("li",[s("a",{attrs:{href:"#更新"}},[a._v("更新")])]),s("li",[s("a",{attrs:{href:"#事件記錄檢視-events"}},[a._v("事件記錄檢視(Events)")])]),s("li",[s("a",{attrs:{href:"#容器日誌-logs"}},[a._v("容器日誌(Logs)")])]),s("li",[s("a",{attrs:{href:"#容器終端機-terminal"}},[a._v("容器終端機(Terminal)")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[a._v("#")]),a._v(" 部署")]),a._v(" "),s("h3",{attrs:{id:"app-清單"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-清單"}},[a._v("#")]),a._v(" App 清單")]),a._v(" "),s("p",[a._v("在頁面中，點擊 + New Service 按鈕後，即出現可部署的 App 清單。在清單中，每一個區塊都包含一個應用服務的名稱、可部署的版本、應用服務的描述以及部署的按鈕 Deploy，點擊 Deploy按鈕會出現安裝資訊的彈窗。\n"),s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/appList.png",alt:"app list"}})]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("若由邊緣端管理頁面進入應用管理頁面，則視為部署邊緣平台的應用。因此，在 App 清單中需先選擇應用服務的 Namespace，再進行部署。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/edgeAppItem.png",alt:"app list"}})])]),a._v(" "),s("h3",{attrs:{id:"安裝資訊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝資訊"}},[a._v("#")]),a._v(" 安裝資訊")]),a._v(" "),s("p",[a._v("在確認及填寫相關的安裝資訊資後，點選「OK」即可進行安裝的動作。安裝時所需的資訊說明如下:")]),a._v(" "),s("h4",{attrs:{id:"general"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[a._v("#")]),a._v(" General")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/general.png",alt:"general"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Instance Name")]),a._v("：對外的 url prefix，系統預設會直接代入應用服務名稱。若無特別需求，請直接使用應用服務名稱即可。")]),a._v(" "),s("li",[s("strong",[a._v("Storage")]),a._v("：當應用開發者有在 Helm 檔中設定 mount path 時，則需要在部屬時命名或指定儲存空間。若未曾部署過，則需要命名儲存空間名稱；若曾經部屬過，則會出現 Retain 或 New 的選項。說明如下：\n"),s("ul",[s("li",[a._v("Retain：部屬時，使用之前建立過的儲存空間。")]),a._v(" "),s("li",[a._v("New：部署時，使用新的儲存空間，並命名此儲存空間。")]),a._v(" "),s("li",[a._v("註：若使用的 Helm 檔是 2020/08/04 以前建立的，則不會有 Storage Name 的欄位，且系統往後將不再支援此儲存空間的新功能設計，例如：線上檔案上傳、下載和修改。")])])])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("如果是部署邊緣平台的應用，在 General 分頁將額外顯示以下資訊：\n"),s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/edgeGeneral.png",alt:"app list"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Edge Namespace")]),a._v("：應用服務所在的租戶空間。")]),a._v(" "),s("li",[s("strong",[a._v("Edge Node")]),a._v("：應用服務部屬在指定的 k8s node 上，Auto 為不指定，讓系統隨機部屬。此功能只有當應用服務 在 AM 有做 Advance 相關設定才可使用。")])])]),a._v(" "),s("h4",{attrs:{id:"high-availability"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#high-availability"}},[a._v("#")]),a._v(" High Availability")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/highA.png",alt:"high availability"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Replica")]),a._v("：通過設置Replica 來指定要同時運行的 Pod 個數。預設值為1。")])]),a._v(" "),s("h4",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[a._v("#")]),a._v(" Resources")]),a._v(" "),s("p",[a._v("設定應用服務中容器的資源限制，例如 CPU 和 RAM 的上下限值。在安裝SaaS應用前，SM的操作人員可以依實際資源狀況，再進行調整。若不進行調整，則安裝SaaS應用時，將會依SaaS應用自身宣告 CPU 和 RAM 的預設值進行分配。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/resource.png",alt:"resource"}})]),a._v(" "),s("h4",{attrs:{id:"environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[a._v("#")]),a._v(" Environment Variables")]),a._v(" "),s("p",[a._v("某些 SaaS 應用需要在安裝的當下，同時指定一些參數才能正常運行。因此，SM操作人員在安裝SaaS應用時，需瞭解是否有需要設定額外參數的部份。若有，則在此進行設定。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/env.png",alt:"env"}})]),a._v(" "),s("h4",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),s("p",[a._v("僅提醒用途。若有出現此分頁，則代表所安裝的SaaS應用需要安裝對應的license項目。如果沒有對應的license項目仍可繼續安裝SaaS應用。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/license.png",alt:"license"}})]),a._v(" "),s("h4",{attrs:{id:"progress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#progress"}},[a._v("#")]),a._v(" Progress")]),a._v(" "),s("p",[a._v("填寫且確認相關的安裝資訊資後，按下 OK 即開始進行部署，並於畫面顯示目前安裝進度。若安裝過程中出現錯誤，亦會顯示於進度條下方。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/progress.png",alt:"progress bar"}})]),a._v(" "),s("h2",{attrs:{id:"刪除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刪除"}},[a._v("#")]),a._v(" 刪除")]),a._v(" "),s("p",[a._v("在應用服務清單中，點擊指定應用服務 Actions 中的 Delete 後，會出現彈窗詢問是否刪除應用服務。點擊 Confirm 即開始刪除。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/delApp_1.png",alt:"delete app"}}),a._v(" "),s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/delApp_2.png",alt:"delete app confirm"}})]),a._v(" "),s("h2",{attrs:{id:"更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[a._v("#")]),a._v(" 更新")]),a._v(" "),s("p",[a._v("在應用服務清單中，點擊指定應用服務的版本(Version)，即出現下拉式選單。在下拉式選單中會出現可選擇的版本。選擇欲更新的版本後，會出現彈窗詢問有關 General\b，High Availability，Resources，以及 Environment Variables 的設定。編輯完成後，點擊OK 即開始更新。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/updateService.png",alt:"update app"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/updateService_2.png",alt:"update app"}})]),a._v(" "),s("h2",{attrs:{id:"事件記錄檢視-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件記錄檢視-events"}},[a._v("#")]),a._v(" 事件記錄檢視(Events)")]),a._v(" "),s("p",[a._v("在應用服務清單中，點擊指定應用服務的 Actions 中的 Events 後，會出現彈窗顯示應用服務最近的事件紀錄時間軸。 事件紀錄是應用服務在系統中部署過程的訊息，可幫助排除部署時發生的錯誤。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/event_1.png",alt:"event"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/event_2.png",alt:"event"}})]),a._v(" "),s("h2",{attrs:{id:"容器日誌-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器日誌-logs"}},[a._v("#")]),a._v(" 容器日誌(Logs)")]),a._v(" "),s("p",[a._v("在應用服務清單中，點擊指定應用服務的 Actions 中的 Logs 後，會開啟容器日誌的分頁。在日誌分頁中會顯示應用服務容器所記錄的系統訊息。日誌只顯示從開始時間(Since time)最多五百筆的紀錄。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("此操作僅限於雲平台。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/log_1.png",alt:"logs"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/log_2.png",alt:"logs"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Logs")]),a._v("：可將頁面切換到終端機頁面。")]),a._v(" "),s("li",[s("strong",[a._v("Service")]),a._v("：目前操作的應用服務。")]),a._v(" "),s("li",[s("strong",[a._v("Pods")]),a._v("：選擇欲查看的Pod。")]),a._v(" "),s("li",[s("strong",[a._v("Container")]),a._v("：可選擇欲查看的容器。")]),a._v(" "),s("li",[a._v("點擊下載圖示按鈕可將日誌下載成文字檔。")]),a._v(" "),s("li",[a._v("Since Time日期時間選擇器和上下頁等操作按鈕，可調整日誌的開始時間。")])]),a._v(" "),s("h2",{attrs:{id:"容器終端機-terminal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器終端機-terminal"}},[a._v("#")]),a._v(" 容器終端機(Terminal)")]),a._v(" "),s("p",[a._v("在應用服務清單中，點擊指定應用服務的 Actions 中的 Terminal 後，會開啟終端機的分頁。在終端機頁面中可對應用服務的容器進行遠端操作。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("此操作僅限於雲平台。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/smUserGuide/img/page/3_SaaS/terminal.png",alt:"terminal"}})])])}),[],!1,null,"51aa6a0c",null);t.default=r.exports}}]);