(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{210:function(t,e,a){"use strict";a.r(e);var s=a(31),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"minecraft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minecraft"}},[t._v("#")]),t._v(" Minecraft")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#network-configuration"}},[t._v("Network Configuration")]),a("ul",[a("li",[a("a",{attrs:{href:"#setting-up-the-network"}},[t._v("Setting up the Network")])]),a("li",[a("a",{attrs:{href:"#adding-additional-servers"}},[t._v("Adding Additional Servers")])]),a("li",[a("a",{attrs:{href:"#in-conclusion"}},[t._v("In Conclusion")])]),a("li",[a("a",{attrs:{href:"#firewalls"}},[t._v("Firewalls")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"network-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-configuration"}},[t._v("#")]),t._v(" Network Configuration")]),t._v(" "),a("p",[t._v("This guide was written for Minecraft Proxy Servers (BungeeCord, Waterfall, HexaCord, etc).")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("For the setup described below, it is necessary that all servers are on the same node.")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),a("p",[t._v("If you are a host you should limit it to a single proxy network on a node if you are selling them to customers.")])]),t._v(" "),a("h3",{attrs:{id:"setting-up-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-network"}},[t._v("#")]),t._v(" Setting up the Network")]),t._v(" "),a("p",[t._v("The ideal setup for this involves a separated internal network with only one access point — the proxy server —\nwhich is an easy configuration with Pterodactyl. In order to create a Bungeecord network you'll first need to add an\nallocation to your Node that makes your Bungeecord server publicly accessible. This allocation should be for your\npublic IP address and the default port you wish to use — generally "),a("code",[t._v("25565")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Create a proxy server allocating the host IP and any port you want (mc default being 25565).")])]),t._v(" "),a("h3",{attrs:{id:"adding-additional-servers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-additional-servers"}},[t._v("#")]),t._v(" Adding Additional Servers")]),t._v(" "),a("p",[t._v("All other servers that are a part of the network should be created on local interfaces — meaning they are not publicly\naccessible. Create new allocations on the localhost IP address "),a("code",[t._v("127.0.0.1")]),t._v(" with some ports for the servers to use.\nYou can also enter a port range, e.g. "),a("code",[t._v("30000-30010")]),t._v(" which will get you 11 ports.")]),t._v(" "),a("p",[t._v("Now create new servers and be sure to use your internal allocations — "),a("code",[t._v("127.0.0.1")]),t._v(" — for each of them. To add the\nservers to your network you'll use "),a("code",[t._v("172.18.0.1:<port>")]),t._v(" — or "),a("code",[t._v("127.0.0.1")]),t._v(" which will automatically be resolved to your\nDocker network interface IP — as the IP address in your configuration file.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Create a minecraft server allocating 127.0.0.1 in the panel with any port you want")])]),t._v(" "),a("h3",{attrs:{id:"in-conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-conclusion"}},[t._v("#")]),t._v(" In Conclusion")]),t._v(" "),a("ul",[a("li",[t._v("Only the proxy server (Bungeecord/Hexacord/Waterfall) should be attached to your publically accessible IP address.")]),t._v(" "),a("li",[t._v("You should "),a("em",[t._v("not")]),t._v(" make any modifications to IPTables.")]),t._v(" "),a("li",[t._v("All of the servers behind the proxy are safe from direct "),a("em",[t._v("external")]),t._v(" connections, assuming you bind them to "),a("code",[t._v("127.0.0.1")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"firewalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewalls"}},[t._v("#")]),t._v(" Firewalls")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The ports you open with the following will be accessable by all minecraft servers on the node.")])]),t._v(" "),a("p",[t._v("The following commands are to allow access on "),a("code",[t._v("<PTERODACTYL_NET>")]),t._v(" (default is 172.18.0.1).")]),t._v(" "),a("h4",{attrs:{id:"ufw-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ufw-ubuntu"}},[t._v("#")]),t._v(" UFW (ubuntu)")]),t._v(" "),a("p",[t._v("Allow access to the pterodactyl pterodactyl0 network on a specific port.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ufw allow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" on pterodactyl0 to "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PTERODACTYL_NET"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("LOCALHOST_PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" proto tcp\n")])])]),a("h4",{attrs:{id:"firewalld-centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewalld-centos"}},[t._v("#")]),t._v(" Firewalld (centos)")]),t._v(" "),a("p",[t._v("Allow access to pterodactyl0 from the pterodactyl0 network.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("firewall-cmd --permanent --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-source"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PTERODACTYL_NET"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);